import React from 'react'
import './Collab.css'
import jhlogo from '../../assets/Other/newJHlogo.png'
import collab from '../../assets/Other/collab.png'
import mobile from '../../assets/Collab/mobile.png'
import mobile2 from '../../assets/Collab/mobile2.png'
import yarn from '../../assets/Collab/yarn-icon.png'
import page from '../../assets/Collab/Page.png'





function Collab() {
  return (
    <div className='project_outer_shell'>


      <div className='collab_background_image'>

        <div className='project_top_text'>


          <h1>Collaborative Counselling Design Work</h1>

          <p>I worked closely with the owner of Collaborative Counseling For You to develop eye-catching designs for a concept for their new website. The owner stated she wanted less text on their site, wanted to incorporate more iconography, and bring their brand blue to the forefront of design.</p>
          <br></br>
          <br></br>
        </div>

        
    <div className='collab_button_container'>
        <a href='https://www.figma.com/file/fYGfimt9A5Scba1r0f0y0y/Collaborative-Counselling-Designs?type=design&node-id=1%3A2235&mode=design&t=P8l72AlMtFv6w4lZ-1'>
    <button>Visit Figma</button>
        </a>
    </div>


    <div className='sunie_date_container'>
    <span>February 2023</span>
    </div>
      </div>

     

      <div className='collab_project_mid_page'>


        <div className='collab_tech_used'>
        <h1>Technologies Used</h1>
        </div>

        <div className='tech_icons'>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'  alt=''/>
          <img className='php' src='https://assets.materialup.com/uploads/b796c2d9-6cd3-4893-a24b-238af96424d2/preview.jpg'  alt=''/>
          <img className='php' src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg'  alt=''/>

        </div>

        <div className='jh_container'>
    <img className='jh_logo' src={jhlogo} alt=''/>
        </div>


        <div className='j_key_features'>
          <div className='logo_container'>
          <img className='collab_logo' src={collab} alt=''/>
          </div>
          <h1 className='kf2'>Key Features</h1>


          <div className='key_grid'>
          <div className='key_grid_background_c'></div>

          <div className='key_grid_one_c'>
            <h2>Professional Design</h2>
            <p>From Webpages, to custom graphics, I worked with the Collaborative Counselling team to whip up a potential new design for their website.</p>
          <div className='key_grid_one_inner_c'>
          <div className='collab_image_frame'>
            <img className='collab_page' src={page} alt=''/>
          </div>
            </div>
      </div>

                    <div className='key_grid_two_c'>
                      <h2>With responsive expertise</h2>
                      <p>I was given a number of websites and exmaples that contributed greatly to the design created. When given the information needed, I was able to craft exactly what was in the mind of the Collaborative Counselling team</p>
          <div className='key_grid_two_inner_c'>
          <div className='collab_image_frame'>
            <img className='collab_mobile' src={mobile} alt=''/>
            <img className='collab_mobile' src={mobile2} alt=''/>
          </div>



    
          </div>
                    </div>
                    </div>
                  </div>
                </div>





<div className='collab_project_lower_page'>

  <div className='jh_container2'>
  <img className='jh_logo2' src={jhlogo} alt=''/>
  </div>

<h1>Design Elements</h1>
<div className='custom_icon_container'>
  <h3 className='custom_icons'>Custom Graphic</h3>
</div>
  <div className='yarn_container'>
      <img className='yarn_img' src={yarn} alt=''/>


</div>


</div>



        

    </div>
  )
}

export default Collab;