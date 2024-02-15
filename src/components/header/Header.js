// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import NavSphere from '../Three/NavSphere';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain threshold (e.g., 100 pixels)
      setIsScrolled(window.scrollY > 100); // Change the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth < 500;
      setIsMobile(isMobile);
    };

    // Check if the window size changes
    window.addEventListener('resize', checkIsMobile);

    // Initial check
    checkIsMobile();

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className={`header_outer_main ${isScrolled ? 'scrolled' : ''}`}>
      <NavSphere />
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </div>
  );
};

export default Header;
