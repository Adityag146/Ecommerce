import React, { useState } from 'react'

export default function Signup(props) {
  // const [signUpForm,setSignUp]=useState({
  //   fname:"",
  //   lname:"",
  //   email:"",
  //   signPass:""
  // })
  const SignUpData={fname:"",lname:"",email:"",password:""}
  const [signupFields,setSignupFields]=useState(SignUpData)
  const [errorflag,setErrorFlag]=useState(false)

  const signupOnchange=(e)=>{
    setSignupFields({...signupFields,[e.target.name]:e.target.value})
  }
 const handleSignupSubmit=()=>{
  if(!signupFields.fname || !signupFields.lname || !signupFields.email || !signupFields.password){
    alert ("Please Fill all the fields")
  }else if(signupFields.password.length<6){
    alert("Password Must e more than 6 letters")
  }
  // else if(signupFields.email.includes('@'))
  else{
    // setErrorFlag(true)
    return
    alert("Congretualtion  You are Successfully Login")
  }

 }

  
 
  return (
    <div style={{ }}>

    <div className='login-dialog'> 
 
 
    <div class="modal fade" id="Signup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SignupLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="SignupLabel">Sign up</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
              <label>First Name</label>
              <input style={props.inputStyle} name='fname'   onChange={signupOnchange} placeholder='First Name'/>
               
              </div>
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
              <label>Last Name</label>
              <input style={props.inputStyle} name='lname'  onChange={signupOnchange}  placeholder='Last Name'/>
              
            
            </div>
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
              <label>Email</label>
              <input style={props.inputStyle} name='email' onChange={signupOnchange}  placeholder='Email'/>
              
            </div>
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
              <label>Password</label>
              <input style={props.inputStyle}  name='password' onChange={signupOnchange}  placeholder='Password'/>
              
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={handleSignupSubmit}>SignUp</button>
          </div>
          </div>
          
        </div>
      </div>
    </div> 
    </div>
  )
}
