import React from 'react'
import ParticleBackdrop from './Background/ParticleBackdrop'
import './Projects.css' 
import cashHouse from '../assets/Other/cashHouse.jpg'
import sunie from '../assets/Other/Sunie-stock.jpg'
import chicago from '../assets/Other/chitown.jpg'
import santafe from '../assets/Other/Santafe.jpg'
import pilytix from '../assets/Other/pilytix.jpg'
import pokemon from '../assets/Other/Pokemon.jpg'
import { NavLink } from 'react-router-dom'

function Projects() {



  return (
    <div className='projects_and_particle'>

        
<div className='projects_outer'>
        <h1 className='projects_header'>Projects</h1>

        <div className='grid_outer'>


        {/* <div className='grid_item_projects'>
            <div className='cashHouse_text'>
                            <h1>Center for Relational Learning Web Development</h1>         
                    </div>
            <NavLink to='/hellosunie'>
                <img alt='' src={santafe} className='sunie'/>
               </NavLink>

            </div> */}


            <div className='grid_item_projects'>
            <div className='cashHouse_text'>
                            <h1>Hello Sunie Software Development</h1>         
                    </div>
            <NavLink to='/hellosunie'>
                <img alt='' src={sunie} className='sunie'/>
               </NavLink>
            </div>

            <div className='grid_item_projects'>
                    <div className='cashHouse_text'>
                            <h1>Jericho Nursery Website Revitalization</h1>         
                    </div>
                      <NavLink to='/jerichonursery'>
                <img alt='' src={cashHouse} className='cashHouse'/>
                      </NavLink>
     
            </div>

            <div className='grid_item_projects'>
            <div className='cashHouse_text'>
                            <h1>Collaborative Counselling Design Work</h1>         
                    </div>
            <NavLink to='/collaborative4you'>
                <img alt='' src={chicago} className='sunie'/>
               </NavLink>

            </div>

            <div className='grid_item_projects'>
            <div className='cashHouse_text'>
                            <h1>Pilytix Assesment </h1>         
                    </div>
            <NavLink to='/pilytix'>
                <img alt='' src={pilytix} className='sunie'/>
               </NavLink>

            </div>
            <div className='grid_item_projects'>
            <div className='cashHouse_text'>
                            <h1>Shiny Pokemon Checklist</h1>         
                    </div>
            <NavLink to='/shinychecklist'>
                <img alt='' src={pokemon} className='sunie'/>
               </NavLink>

            </div>





        </div>


</div>

        <ParticleBackdrop className="particle_projects"/>
    </div>
  )
}

export default Projects