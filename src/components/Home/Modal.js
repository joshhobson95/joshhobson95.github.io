import React, { useState } from 'react';
import './Modal.css';
import logo from '../../assets/Other/logo.png';
import pdf from '../../assets/Joshua_Hobson_CV_2024.pdf';
import emailjs from 'emailjs-com';

function Modal() {
  const [alertMessage, setAlertMessage] = useState(null);

  const handleDownloadResume = () => {
    const pdfPath = pdf;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Josh_Hobson_Resume.pdf';
    link.click();
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1nah4sv', 'template_5r1zwd3', e.target, 'G7JA_gNixvuRkKlDE')
      .then((result) => {
        console.log(result.text);
        setAlertMessage({ type: 'success', text: 'Email sent successfully!' });
      })
      .catch((error) => {
        console.error(error.text);
        setAlertMessage({ type: 'error', text: 'Failed to send email. Please try again.' });
      })
      .finally(() => {
        // Clear the form after sending the email
        e.target.reset();

        // Hide the alert after a few seconds
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
      });
  };

  return (
    <>
      {alertMessage && <div className='blanket_overlay'></div>}
      <div className='modal_outer'>
        <div className='modal_main'>
          <div className='modal_left'>
            <h2>About me.</h2>
            <div className='intro_container'>
              <p className='intro'>Hello, my name is <span className='jh_red'>Josh Hobson </span>and I am a <span className='jh_blue'>Full Stack Web Developer. </span> Whether you are looking for a new member for your team, or just the freelancer who can get it all done, I am passionate to help you reach your Web Development needs. From <span className='jh_yellow'>design to database </span>, let me be the answer to “How can we get this done?”</p>
              <div className='resume_button_container'>
                <button onClick={handleDownloadResume} className='resume_button'>Download Resume</button>
              </div>
            </div>
          </div>
          <div className='modal_right'>
            <div className='close_modal_div'></div>
            <div className='modal_right_header'>
              <h2>Send me an Email.</h2>
              <p>Lets get something working</p>
            </div>
            {alertMessage && (
              <div className={`alert ${alertMessage.type}`}>
                {alertMessage.text}
              </div>
            )}
            <form className='contact_form' onSubmit={handleSendEmail}>
              <div className='image_container'>
                <img src={logo} alt='' className='form_logo'/>
              </div>
              <h5>Name</h5>
              <input
                type='text'
                name='from_name'
                className='name_input'
              />
              <h5>Email</h5>
              <input
                type='text'
                name='from_email'
                className='email_input'
              />
              <h5>Message</h5>
              <textarea
                type='textarea'
                name='message'
                className='message_input'
              />
              <div className='send_container'>
                <button className='send' type='submit'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
