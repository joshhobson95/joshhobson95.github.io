import React, { useRef } from 'react';
import ParticleBackdrop from '../Background/ParticleBackdrop';
import './Home.css'
import Modal from './Modal';
import newlogo from '../../assets/Other/newJHlogo.png'
import { NavLink } from 'react-router-dom';


function Home() {

    const modalRef = useRef(null);

    const toggleModalVisibility = () => {
      const whiteSquareElement = document.querySelector('.white_square');
  
      if (whiteSquareElement.classList.contains('modal-open')) {
        whiteSquareElement.classList.remove('modal-open');
      } else {
        whiteSquareElement.classList.add('modal-open');
      }
      
      const modalElement = modalRef.current;
      if (modalElement) {
        modalElement.style.display =
          modalElement.style.display === 'none' ? 'block' : 'none';
      }
    };
  




  return (
    <div className='home'>


<div className="header_shell">
        <div className="header_left">
            <div className="inner_left">
            <h1 className="JoshHobson">Josh Hobson</h1>
            <h1>Web Developer</h1>
            </div>
        </div>

</div>

<div className="white_square" onClick={toggleModalVisibility}>
  <p className='x'>x</p>
</div>
<div className="white_square2">
</div>
<div className="white_square3">
</div>


<div ref={modalRef} style={{ display: 'none' }}>
  <br></br>
        <Modal />
      </div>

<div className="newlogo_container">
  <img className="newlogohome" src={newlogo} alt=""/>
</div>




<div className='secret'>
<NavLink to='/secret'>
<button className='themoon'>The moon</button>
</NavLink>
</div>

<ParticleBackdrop />

    
    </div>
  )
}

export default Home