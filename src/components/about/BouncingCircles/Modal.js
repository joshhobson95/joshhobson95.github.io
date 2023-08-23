import React, { useState, useEffect } from 'react';
import p1 from '../../../assets/Josh.jpg'
import p2 from '../../../assets/Sofia.jpg'
import p3 from '../../../assets/seattle.jpg'
import p4 from '../../../assets/window.jpg'
import './Modal.css'; 

const Modal = ({ modalId }) => {
  const [showModal, setShowModal] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);

  const handleDivClick = () => {
    setShowModal(true);
  };

  useEffect(() => {

    const hideParagraph = () => {
      setTimeout(() => {
        setShowParagraph(false);
      }, 5000);
    };

    hideParagraph();
  }, []);

  const renderModalContent = () => {
    switch (modalId) {
      case 'circle1':
        return <img src={p1} alt="Josh" />;
      case 'circle2':
        return <img src={p3} alt="Seattle" />;
      case 'circle3':
        return <img src={p2} alt="Sofia and Lucy" />;
      case 'circle4':
        return <img src={p4} alt="Albuquerque" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={`circle ${modalId}`} onClick={handleDivClick}>
        {showParagraph && (
        <p>
  Click Me!
        </p>
      )}
      </div>

      {showModal && (
  <div>
    <div className="overlay">
      <div className="modal">
        <div className="modalContent">
          {renderModalContent()}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Modal;
