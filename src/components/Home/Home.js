import React, { useRef, useState } from 'react';
import ParticleBackdrop from '../Background/ParticleBackdrop';
import './Home.css'
import Modal from './Modal';
import newlogo from '../../assets/Other/newJHlogo.png'
import { NavLink } from 'react-router-dom';

function Home() {
    const modalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModalVisibility = () => {
        setIsModalOpen(!isModalOpen);
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

            <div className={`white_square ${isModalOpen ? 'modal-open' : ''}`} onClick={toggleModalVisibility}>
                <p className='x'>x</p>
            </div>
            <div className="white_square2"></div>
            <div className="white_square3"></div>

            {isModalOpen &&
                <div ref={modalRef}>
                    <br></br>
                    <Modal />
                </div>
            }

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

export default Home;
