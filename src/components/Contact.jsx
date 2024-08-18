import React from 'react';

function Contact() {
  return (
    <div id='contact'>
        <h1> CONTACT US</h1>
        <form>
            <input type='text' placeholder='Full Name' required/>

            <input type='email' placeholder='Enter Email' required/>

            <textarea placeholder='Write Us Here' name='message...'></textarea>

            <input type='Submit' value='send'/>
        </form>
    </div>
  )
}

export default Contact;