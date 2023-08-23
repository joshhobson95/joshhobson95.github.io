import React, {useState} from 'react'
import {send} from 'emailjs-com'
import './Contact.css'
import Swal from 'sweetalert2';

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

 

  const onSubmit = async (e) => {
    e.preventDefault();
    send(
      'service_1nah4sv',
      'template_5r1zwd3',
      toSend,
      'G7JA_gNixvuRkKlDE'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      setToSend({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      })
      Swal.fire({
        title: 'Message Recieved!',
        text: "Talk to you soon",
        icon: 'success',
        background: 'rgba(6, 4, 37)',
        color: 'white',
        confirmButtonColor: 'rgba(27, 18, 148)',
        
      })
      
   
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };






  return (
    <div className='contact'>


    <div className='y'>
      <h4 className='w'>Contact</h4>
      </div>
     
      
      <div className='form_container'>
   <form className='contact_form' onSubmit={onSubmit}>
    <h5 className='email'>I have been working on a ton lately but am exctied to hear from you. I am always looking for new and exciting oppurtunies</h5>

  <input
    type='text'
    name='from_name'
    placeholder='Your name'
    className='input'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='My name (josh)'
    className='input'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email address'
    className='input'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <textarea
  className='message_box'
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <button type='submit' className='form_button'> Submit </button>
</form>

</div>
      </div>
  )
}


export default Contact