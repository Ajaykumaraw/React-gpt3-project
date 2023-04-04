import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
        <div className='gpt__header-content'>
          <h1 className='gradient-text'>Let's Build Something Amazing with GPT-3 OpenAI</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloremque!</p>
          <div className='gpt__header-content-input'>
              <input type=" email" placeholder='Your Email Address' />
              <button type='button' >Get Started</button>
          </div>
          <div className='gpt__header-content_people'>
            <img src={people} alt="people" />
            <p>1600 people has requested the access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='gpt__header_image'>
              <img src={ai} alt="ai" />
          </div>
    </div>
  )
}

export default Header