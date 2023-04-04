import React from 'react';
import './whatGPT3.css';
import Feature from '../../components/features/Features'; 


const WhatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
        <div className='gpt3_whatgpt3-feature'>
            <Feature title="What is GPT-3"  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis minus aut
             fugit dolorem placeat voluptatem illo reiciendis quibusdam quia."/>
        </div>
        <div className='gpt3__whatgpt-header'>
            <h1> The possiblities are beyond your imagination. </h1>
            <p>Explore the Library</p>
        </div>
        <div className='what__whatgpt3-container'>
          <Feature  title='Chatbots'  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis minus aut
             fugit dolorem placeat voluptatem illo reiciendis quibusdam quia."/>
          <Feature  title='Knowledgebase' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis minus aut
             fugit dolorem placeat voluptatem illo reiciendis quibusdam quia."/>
          <Feature  title='education' text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis minus aut
             fugit dolorem placeat voluptatem illo reiciendis quibusdam quia."/>
        </div>
    </div>
  )
}

export default WhatGPT