import React from 'react'
import './Skills.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Skills() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 150, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 299, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <div className='skills'>

<div className='skills_h4'>
      <h4>Skills</h4>
</div>



<div className="grid-container">
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=''/>
    <span>React</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt=''/>
  <span>Redux</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"  alt=''/>
  <span>Javascript</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt=''/>
  <span>CSS</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt=''/>
  <span>nodeJs</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt=''/>
  <span>PostgreSQL & pgAdmin</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img  src="https://icongr.am/devicon/express-original.svg?size=133&color=ffffff" alt=''/>
  <span>Express</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt=''/>
  <span>Sequelize</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=''/>
  <span>Github</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"  alt='' />
  <span>Heroku</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt=''/>
  <span>Amazon Web Services</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='' />
  <span>Figma</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg" alt='' />
  <span>Photoshop & Adobe Creative Suite</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://assets.materialup.com/uploads/b796c2d9-6cd3-4893-a24b-238af96424d2/preview.jpg" alt='' />
  <span>Vectornator & SVG animation</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt=''/>
  <span>WordPress</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt='' />
  <span>php</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt=''/>
  <span>Ga4 and SEO Optimization</span>
  </div>
  <div className="grid-item" data-aos='zoom-in'>
  <img src="https://images.g2crowd.com/uploads/product/image/small_square/small_square_477db83f729d63210139ec7cd29c1351/render-render.png" alt=''/>
  <span>Render Deployment</span>
  </div>
</div>



    </div>
  )
}

export default Skills