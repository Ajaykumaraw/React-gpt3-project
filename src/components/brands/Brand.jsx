import React from 'react';
import './Brand.css';
import { google,atlassian,dropbox,shopify,slack } from './import';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
        <div className='gpt3__brand-logos'>
          <img src={google} alt="google" />
          <img src={atlassian} alt="atlassian" />
          <img src={slack} alt="slack" />
          <img src={dropbox} alt="dropbox" />
          <img src={shopify} alt="shopify" />
        </div>
    </div>
  )
}

export default Brand