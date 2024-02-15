import React from 'react'
import { NavLink } from 'react-router-dom';
import './DesktopHeader.css'

function DesktopHeader() {
  return (
    <div className='header_outer'>
  
    <div className="header_right">
      <h1>
  <NavLink to='/'>
      HOME  ||  </NavLink> 
      </h1>
      <h1>
      <NavLink to='/skills'>
        SKILLS   ||  </NavLink> 
      </h1>
      <h1>
        <NavLink to='/projects'>
           PROJECTS</NavLink>
      </h1>
    </div>
</div>
  )
}

export default DesktopHeader;