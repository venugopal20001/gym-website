import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>Learn More About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <button>Read More</button>
        </div> 
    </div>
  )
}

export default About;