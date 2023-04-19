import React from 'react'
import "./About.css"
import resume from '..//..//assets/2023 Resume.docx.pdf'
import BouncingCircles from './BouncingCircles/BouncingCircles'



function About() {



  return (
    <div className='about'>
        <div className='pictures'>
            <BouncingCircles />
        </div>



        <div className='text'>
          <div className='abouth4'>
          <h4>About</h4>
          </div>
      <div className="horizantal">
          <span>Full Stack Web Developer</span>
          <span>Avid Computerist</span>
          <span>Go Getting Freelancer</span>
          <span>Logical Web Head</span>  
      </div>
      <br></br>
      <br></br>
      <div className='intro'>
      <p>Hello, my name is Josh Hobson and I am a Full Stack Web Developer. Whether you are looking for a new member for your team, or just the freelancer who can get it all done, I am passionate to help you reach your Web Development needs. From design to database, let me be the answer to “How can we get this done?”</p>
      </div>

       

      <div className='resume_div'>
        <a 
        download="Joshua_Hobson_CV"
        href={resume}
        >
      <button className='resume_download'>Download Resume</button>
        </a>
      </div>
        </div>


    </div>
  )
}

export default About