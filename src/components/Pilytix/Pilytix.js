import React from 'react'
import './Pilytix.css'
import home from '../../assets/Pilytix/home1.png'
import home2 from '../../assets/Pilytix/home2.png'



function Pilytix() {
  return (
    <div className='project_outer_shell'>


      <div className='pilytix_background_image'>

        <div className='project_top_text'>


          <h1>Pilytix Assesment</h1>
          <p>A short assesement for Potential Employer, Pilytix. I completed this graphing application with no prior knowledge of graping packages, and did the entire project in 6 hours</p>
        </div>

        
    <div className='pilytix_button_container'>
        <div className='pilytix_button_backdrop'></div>
        <a href='https://codesandbox.io/p/sandbox/charming-browser-gj525p?file=%2Fsrc%2FApp.js%3A15%2C20'>
    <button>Visit Codebox</button>
        </a>
    </div>

    <div className='pilytix_date_container'>
    <span>February 2023</span>
    </div>
      </div>

     

      <div className='pilytix_project_mid_page'>


        <div className='pilytix_tech_used'>
        <h1>Technologies Used</h1>
        </div>

          <div className='tech_icons'>
  <div class='icon_container'>
    <img className='php' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt=''/>
  </div>
  <div class='icon_container'>
    <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' alt=''/>
  </div>
  <div class='icon_container'>
  <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'  alt=''/>
  </div>

</div>


        <div className='jh_container'>

        </div>


        <div className='key_features'>
          <div className='logo_container'>

          </div>
          <h1 className='kf'>Key Features</h1>


          <div className='key_grid'>

          <div className='key_grid_background_p'></div>

          <div className='key_grid_one'>
            <h2>Using Graph JS</h2>
            <p>This project mostly revolved around picking a Graphing Package that worked in React, and implementing it to create an internal tool for employees to use to look at the data the Pilytix provides to their customers. I was given a table of dummy data in order to populate the application</p>
          <div className='key_grid_one_inner_p'>
              <div className='pilytix_images'>
                <img src={home}  alt=''/>
                <img src={home2}  alt=''/>
              </div>
      

            </div>
      </div>

                    </div>
                  </div>
                </div>







        

    </div>
  )
}

export default Pilytix