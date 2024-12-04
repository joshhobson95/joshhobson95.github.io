import React from 'react'
import './Center.css'
import jhlogo from '../../assets/Other/newJHlogo.png'


import santafe from '../../assets/Other/Santafe.jpg'
import crl_logo from '../../assets/CRL/CRL-REMASTERED-LOGO-2024-31.png'
import learning from '../../assets/CRL/learning.png'
import historyFull from '../../assets/CRL/historyFull.png'
import learning2 from '../../assets/CRL/learning2.png'
import blogs from '../../assets/CRL/blogs2.png'
import contact from '../../assets/CRL/contact.png'
import home from '../../assets/CRL/Home.png'
import podcast from '../../assets/CRL/podcast.png'


function Center() {
  return (
    <div className='project_outer_shell'>


      <div className='crl_background_image'>

        <div className='project_top_text'>


          <h1>Center for RelationaLearning</h1>

          <p>Another exciting project I spearheaded for the Center for RelationaLearning was the revival of their website. Leveraging WordPress's accessibility and the customization of classic HTML and JavaScript, I struck a middle ground that allowed for maximum customization as well as continued accessibility.</p>
        </div>

        
    <div className='crl_button_container'>
    <a href='https://relationalearning.com/'>
    <button>Visit Website</button>
    </a>
    </div>


    <div className='crl_date_container'>
    <span>April 2024</span>
    </div>
      </div>

     

      <div className='crl_project_mid_page'>


        <div className='crl_tech_used'>
        <h1>Technologies Used</h1>
        </div>

        <div className='tech_icons'>
          <img className='php' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'  alt=''/>
          <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'  alt=''/>
        </div>

        <div className='jh_container'>
    <img className='jh_logo' src={jhlogo} alt=''/>
        </div>


        <div className='key_features'>
          <div className='logo_container'>
          <img className='crl_logo' src={crl_logo} alt=''/>
          </div>
          <h1 className='kfs'>Key Features</h1>


          <div className='key_grid'>

          <div className='key_grid_background'></div>

          <div className='key_grid_one'>
            <h2>Starting Fresh</h2>
            <p>Although we were able to use many of the assets that were on the previous website, I built this project from a completely BlankSlate. I used a WordPress theme called BlankSlate as my jumping-off point, created a Child Theme of BlankSlate and got to work. This allowed me the ability to write everything in HTML and CSS giving me full range to stick true to the design elements that were so carefully crafted and collaborated on with CRL.</p>
          <div className='key_grid_one_inner'>
              <div className='inner_square'>
              <img className='mainpage' src={home} alt=''/>
  


              </div>
      

            </div>
      </div>

                    <div className='key_grid_two'>
                      <h2>Structured Soundly</h2>
                      <p>This structure allowed many pages like the ones you see below to be possible. We reached for the stars with the design elements of this project and came up with some incredible and unique pages. I was quite fond of the history page, not only because the design I came up with was highly regarded among the CRL team, but also because it was the hardest to create with HTML and CSS. It was a challenge I was very proud to have completed.</p>
          <div className='key_grid_two_inner'>
          <div className='inner_square2'>
          <img className='metabox' src={historyFull} alt=''/>
          <img className='eventdetails' src={contact} alt=''/>
          </div>



    
          </div>
                    </div>
                    </div>
                  </div>
                </div>





<div className='crl_project_lower_page'>

  <div className='jh_container2'>
  <img className='jh_logo2' src={jhlogo} alt=''/>
  </div>

<h1>Design Elements</h1>

<div className='splp_2'>
<div className='splp_inner_1'>
  <h3>Color and Content</h3>
  <p>
  Color, Graphics, and Visuals were very important to George Otero and the CRL team, and it was really fun incorporating their existing visuals with new themes that fit with the website. There was tons of color and style in the assets provided for me and I wanted this reflected in the project. I combined these assets with elements of my own to create pages like the one shown below; adding paintstrokes, brand colors, and logos into the webpages to help pull together the webpage.
  </p>
  <div className='customplugin_container'>
  <img className='learning' src={learning} alt='' />
  <img className='learning' src={learning2} alt='' />
  </div>
</div>

<div className='splp_inner_2'>
  <h3>Robust Infrastructure</h3>
  <p>
  Of course, this site was not only about its look but also about its functionality. Many things were missing from the old CRL site that needed to be added to be satisfactory to George and the CRL team, such as blogs and podcasts! Again relying on WordPress, I was able to create a streamlined and robust infrastructure for their blog pages, so that the CRL team could write blogs in WordPress as "Posts" and have them translated to HTML and CSS on the front end of their new site. Much care and design went into how those blogs were presented. There was also a podcast page added, where their Podbean-hosted podcasts will be automatically added as well as their summaries and album covers. 
  </p>
  <div className='graphing_container'>
  <img className='details' src={blogs} alt=''/>
  <img className='graphs' src={podcast} alt=''/>
  </div>
</div>
</div>


</div>



        

    </div>
  )
}

export default Center