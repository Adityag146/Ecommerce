import React, { useState } from 'react'
import NavList from './NavList'
import SearchProduct from './search'

export default function Nav(props) { 
  



  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light " style={{background:"#EE303C",display:"flex" ,justifyContent:"space-between",alignItems:"center",padding:"10px"}}>
      <div class="" style={{display:"flex" ,justifyContent:"space-between",alignItems:"center",width:"100%"}}>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Logo</a>
        <div class="collapse navbar-collapse"  style={{justifyContent:"space-between",display:"flex"}} id="navbarTogglerDemo03">
           <NavList bodyfun={props.bodyfun}/>
          <div className='login-signup-btn'> 
          <SearchProduct searchprod={props.searchprod}/>
            <button  className="btn" onClick={props.viewCartHandle}><i class='fas fa-tshirt'></i></button>
            <button type="button" class="btn login-btn btn-common" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Login
          </button>
          
          
            <button type="button" class="btn btn-common" data-bs-toggle="modal" data-bs-target="#Signup">
              Sign Up
            </button>
            
          </div>
        </div>
      </div>
    </nav>
    
    </>
  )
}
