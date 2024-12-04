import React from 'react'
import './Center.css'
import mainpage from '../../assets/HelloSunie/mainpage.png'
import metabox from '../../assets/HelloSunie/metabox.png'
import jhlogo from '../../assets/Other/newJHlogo.png'
import customplugin from '../../assets/HelloSunie/customplugin.png'
import details from '../../assets/HelloSunie/details.png'
import graphs from '../../assets/HelloSunie/graphs.png'

import santafe from '../../assets/Other/Santafe.jpg'
import crl_logo from '../../assets/CRL/CRL-REMASTERED-LOGO-2024-31.png'



function Center() {
  return (
    <div className='project_outer_shell'>


      <div className='crl_background_image'>

        <div className='project_top_text'>


          <h1>Center for RelationaLearning</h1>

          <p>I was welcomed by a team of brilliant developers to contribute to the creation of Hello crl, a cutting-edge SaaS product tailored for New Mexico utility companies and contractors. Our mission: to streamline schedules, manage billings, handle invoices, and cater to clientele needs with finesse. Collaborating closely with the team, we tackled intricate challenges head-on, crafting bespoke solutions to ensure Hello crl stands out from the competition, offering a unique draw</p>
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
            <h2>HTML Buildout</h2>
            <p>In driving forward the Hellocrl project, I crafted HTML code, seamlessly integrating responsive design elements and optimizing the structure to enhance user experience. Utilizing my expertise in web development, I professionally employed shortcodes to inject HTML and PHP into the WordPress site, setting up the bare bones of the website with proficiency and attention to detail</p>
          <div className='key_grid_one_inner'>
              <div className='inner_square'>
              <img className='mainpage' src={mainpage} alt=''/>


              </div>
      

            </div>
      </div>

                    <div className='key_grid_two'>
                      <h2>MetaBox and ACF</h2>
                      <p>Next, I elevated Metabox customization by implementing dynamic icons that change appearance based on received data, enhancing both the visual appeal and functionality of our site. Additionally, I spearheaded the creation of comprehensive custom post types and a robust data structure using Advanced Custom Fields (ACF), contributing significantly to Hellocrl's efforts in building a stellar product</p>
          <div className='key_grid_two_inner'>
          <div className='inner_square2'>
          <img className='metabox' src={metabox} alt=''/>
          {/* <img className='eventdetails' src={eventdetails} alt=''/> */}
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
  <h3>Custom Plugin Solutions</h3>
  <p>
  In the development of a custom WordPress plugin for the project, I innovatively designed and implemented an intuitive admin calendar feature. This dynamic tool not only allowed administrative users to schedule services, complete with the ability to remove items seamlessly, but also facilitated personalized email notifications, delivering carefully formatted tables containing selected data to recipients as per the client's unique preferences
  </p>
  <div className='customplugin_container'>
  <img className='customplugin' src={customplugin} alt='' />
  </div>
</div>

<div className='splp_inner_2'>
  <h3>Handling and Graphing Data</h3>
  <p>
  In overseeing the data direction for specific service and project views, I curated detailed pages that dynamically showcased information relevant to the selected service. Elevating the user experience, I crafted custom PHP functions to generate insightful graphs from scratch, seamlessly integrating them into the HTML and CSS structure, thereby delivering visually compelling representations of pertinent data tailored to each viewed service or project
  </p>
  <div className='graphing_container'>
  <img className='details' src={details} alt=''/>
  <img className='graphs' src={graphs} alt=''/>
  </div>
</div>
</div>


</div>



        

    </div>
  )
}

export default Center