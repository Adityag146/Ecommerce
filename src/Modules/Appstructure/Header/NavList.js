import React from 'react'
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'
export default function NavList(props) {
  const ulList={
    margin:"0px 20px",
    pading:"10px"
}
  const ulanchor={
    color: "#000",
    textDecoration:"none"
  }
  return (
    <div  >
      <ul className='nav-ul'  style={{listStyleType:"none",display:"flex",margin:"0px"}}>
        <li style={ulList} >
          <NavLink to="/" style={ulanchor} onClick={props.bodyfun} >Home</NavLink> 
        </li>
        <li style={ulList}>
          <NavLink style={ulanchor} to='/info' >Info</NavLink> 
        </li>
        <li style={ulList}>
          <NavLink style={ulanchor} to='/contact-us' >Contact</NavLink> 
        </li>
        <li style={ulList}>
          <NavLink style={ulanchor} href="#" to='/about-us'>About</NavLink> 
        </li>
      </ul>
    </div>
  )
}
