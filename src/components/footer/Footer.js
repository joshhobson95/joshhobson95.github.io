import React from 'react'
import './Footer.css'
import pin from '..//..//assets/pin.png'
import jh from '..//..//assets/jh.png'


function Footer() {
  return (

<div className='footer'>
<footer className="footer-container">
<div className="footer-column">

   <img className='pin' src={pin} alt="" />
 <p>Albuquerque, New Mexico (MST)</p>
</div>
<div className="footer-column">

  <img className='jh' src={jh} alt=''/>
</div>
<div className="footer-column">
  <h3>Social Links</h3>
   <div className='social_icons'>
<div className='linkedin'>
 <a href='https://www.linkedin.com/in/josh-hobson-480024251/' target='_blank' rel="noopener" >
    <i class="devicon-linkedin-plain colored"></i>
</a>
</div>
<div className='github'>
<a href='https://github.com/joshhobson95' target='_blank' rel="noopener">
<i class="devicon-github-original-wordmark"></i>
  </a>        
</div>
</div>
</div>
</footer>
</div>
  )
}

export default Footer