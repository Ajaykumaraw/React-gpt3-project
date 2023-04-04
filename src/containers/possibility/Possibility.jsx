import React from 'react'
import './possiblity.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibilities section__padding' id='possiblity'>
        <div className='gpt3__possibilities-image'>
            <img src={possibilityImage} alt="possibilityImage" />
        </div>
        <div className='gpt3__possiblities-content'>
          <h4>Request early Access to get started</h4>
          <h1 className='gradient-text'>The Possiblities are beyond your imagination</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, 
            libero velit asperiores repellendus dolor ullam perferendis nostrum 
            dolores officiis adipisci, quasi similique! Quae amet repellat similique, 
            obcaecati delectus cupiditate sequi.</p>
            <h4>Request early Access to get started</h4>
        </div>
    </div>
  )
}

export default Possibility