import React from 'react'
import { NavLink } from 'react-router-dom'
import NavList from '../Header/NavList'

export default function Footer() {
  return (
     <>
        <div>
            <ul>
            <li  >
          <NavLink to="/"  >Home</NavLink> 
        </li>
        <li >
          <NavLink  to='/info' >Info</NavLink> 
        </li>
        <li >
          <NavLink  to='/contact-us' >Contact</NavLink> 
        </li>
        <li >
          <NavLink  href="#" to='/about-us'>About</NavLink> 
        </li></ul> 
        </div>
     </>
    
  )
}
