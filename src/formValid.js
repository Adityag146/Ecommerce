import React, { useState } from 'react'
import "./style.css";
export default function FormValid() {
    const [error,setError]=useState({
        fname:" ",
        

    })

    setError({
        ...error,
        fname:"eroore anem"
    })
    return (

    <div>
    <div className='container'>
        <h2>Sign up Form</h2>
        <form>
            <div>
                <label>First Name</label>
                <input name="fname" placeholder='First Name'/>
                <p>error</p>
            </div>
            <div>
                <label>Last Name</label>
                <input name="lname"  placeholder=' Name'/>
            </div>
            <div>
                <label>Password</label>
                <input name="pass"  placeholder='Password'/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input name="cpass"  placeholder='Confirm Password'/>
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
    </div>
      
    </div>
  )
}
