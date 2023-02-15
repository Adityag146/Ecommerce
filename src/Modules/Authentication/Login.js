import React,{useState} from 'react'

export default function Login(props) {

  const[username,setLogin]=useState("") 
  const[password,setLoginPass]=useState("")
  return (
    <div className='login-dialog'> 
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div style={{display:"flex",flexDirection:"column"}}  >
            <label>Username</label>
            <input style={props.inputStyle} onChange={(e)=>setLogin(e.target.value)} name="username" placeholder='Username'/>
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
                <label>Password</label>
                <input placeholder='Password' type="password" onChange={(e)=>setLoginPass(e.target.value)} name="password" style={props.inputStyle}/>
              </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onClick={()=>props.logifunc(username,password)}>Login</button>
        </div>
        </div>
        
      </div>
    </div>
  </div> 
  )
}
