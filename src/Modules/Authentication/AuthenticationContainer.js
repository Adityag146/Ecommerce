import React from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthContainer(props) {
  let SignUpData={fname:"",lname:"",email:"",password:""}
  
  const [token, setToken] = React.useState();
  const LoginFunction = async (username, password) => {
    let loginData = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json","authorization": localStorage.token},
     
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    setToken(await loginData.json());
    await localStorage.setItem('token', token.token);
  };


  //SignUp Form Validation
 


  return (
    <>
      <Login logifunc={LoginFunction} inputStyle={props.inputStyle} />
      <Signup inputStyle={props.inputStyle} />
    </>
  );
}
