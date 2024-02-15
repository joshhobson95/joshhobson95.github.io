import React from 'react'
import './Shiny.css'



function Shiny() {
  return (
    <div className='project_outer_shell'>


      <div className='shiny_background_image'>

        <div className='project_top_text'>


          <h1>Shiny Pokemon Checklist</h1>
          <p>My final project after my education at DevMountain. I created a shiny Pokemon Checklist that helps users keep track of the shiny Pokemon they have collected. Complete with login, and responsive design, this was my first independent project built with React.</p>
        </div>

        
    <div className='shiny_button_container'>
        <div className='shiny_button_backdrop'></div>
        <a href='https://github.com/joshhobson95/ShinyPokemonChecklistv2'>
    <button>Visit Repo</button>
        </a>
    </div>

    <div className='shiny_date_container'>
    <span>Decemeber 2022</span>
    </div>
      </div>

     

      <div className='shiny_project_mid_page'>


        <div className='shiny_tech_used'>
        <h1>Technologies Used</h1>
        </div>

<div className='tech_icons_sp'>
  <div class='icon_container'>
    <img className='php' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt=''/>
  </div>
  <div class='icon_container'>
    <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' alt=''/>
  </div>
  <div class='icon_container'>
    <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' alt=''/>
  </div>
  <div class='icon_container'>
    <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' alt=''/>
  </div>
  <div class='icon_container'>
    <img className='wp' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' alt=''/>
  </div>
</div>



        <div className='jh_container'>

        </div>


        <div className='key_features'>
          <div className='logo_container'>

          </div>
          <h1 className='kfsp'>Key Features</h1>


          <div className='key_grid'>

          <div className='key_grid_background_sp'></div>

          <div className='key_grid_one'>
            <h2>From the Ground Up</h2>
            <p>My first React project, developed during my time at the Devmountain Bootcamp, was a shiny Pokémon checklist—a full-stack endeavor incorporating a Node.js backend and SQL database. This comprehensive application included features such as login authentication, user management, and a wiki. Notably, I implemented a dynamically styled page showcasing all Pokémon, coloring them in from grayscale only after they were added to the user's account, providing a visually engaging and personalized experience for users. The biggest challenge for me was doing this completly independently for the first time, but really helped me learn about what I was capable of </p>
          <div className='key_grid_one_inner_p'>
          <div class="video-container">
  <iframe src="https://www.youtube.com/embed/ThggW3BITFU" frameborder="0" allowfullscreen></iframe>
            </div>

      

            </div>
      </div>

                    </div>
                  </div>
                </div>







        

    </div>
  )
}

export default Shiny