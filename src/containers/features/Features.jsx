import React from 'react'
import './features.css'
import Features from '../../components/features/Features'

const featureData = [
  {
  title:'Improving end distrust instantly',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora adullam accusamus error eos nihil exercitationem! Explicabo, architecto beatae eos possimus ab similique a cum! Quisquam iusto reprehenderit vitae'
  },
  {
    title:'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora adullam accusamus error eos nihil exercitationem! Explicabo, architecto beatae eos possimus ab similique a cum! Quisquam iusto reprehenderit vitae'
  },
  {
    title:'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora adullam accusamus error eos nihil exercitationem! Explicabo, architecto beatae eos possimus ab similique a cum! Quisquam iusto reprehenderit vitae'
  }, 
  {
    title:'Really boy law county ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora adullam accusamus error eos nihil exercitationem! Explicabo, architecto beatae eos possimus ab similique a cum! Quisquam iusto reprehenderit vitae'
  }
]

const FeaturesC = () => {
  return ( 
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__feature-heading">
        <h1>The Future is Now and you Just Need To Realize it. Step into Future Today & Make it 
            Happen.</h1>
            <p>Request early access to get started</p>
      </div>
      <div className='gpt3__feature-container'>
        { featureData.map((item,index) => (
          <Features  title={item.title} text={item.text} key={index} />
        )  ) }
      </div>
    </div>
   )
}

export default FeaturesC