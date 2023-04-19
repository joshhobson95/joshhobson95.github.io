import React from 'react'
import {Link} from 'react-scroll'
import banner from '..//..//assets/banner.png'
import "./Header.css"

function Header() {




  return (
    <div className='header'>
        <div className='logo_container'>
      <img alt="" className="logo" src={banner}/>
        </div>
        <ul className='navbar'>
        <li><Link activeClass="active" className="aboutnav" to='about' spy={true} smooth={true} duration={500}>About</Link></li>
        <li><Link activeClass="active" className="skillsnav" to='skills' spy={true} smooth={true} duration={500}>Skills</Link></li>
        <li><Link activeClass="active" className="projectsnav" to='projects' spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li><Link activeClass="active" className="contactnav" to='contact' spy={true} smooth={true} duration={500}>Contact</Link></li>

        </ul>

    </div>
  )
}

export default Header