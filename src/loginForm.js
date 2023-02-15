import React, { useState } from 'react'

export default function LoginForm() {
  const [setlogin, showSetLogin]=useState(false);
  const [setsignup,showSetup]=useState(false);
  const setlogins=()=>{
    showSetLogin(!setlogin);
    showSetup(false)
  }

  const setsignups=()=>{
    showSetup(!setsignup)
    showSetLogin(false)
  }
  return (
    <div>
    <h1>Sign Up /Login Form</h1>
    <div>
      <button onClick={setlogins}>Login</button>
      <button onClick={setsignups}>signup</button>
    {setlogin &&(
        <h3>Welcome User</h3>
      )}

      {setsignup &&(
        <div>
        <input placeholder='Name'/>
        <input placeholder='age'/>
        <button>OK</button>
        </div>
      )

      }
    </div>
          
    </div>
  )
}
