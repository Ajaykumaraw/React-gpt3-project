import React from 'react'
import './blog.css';
import Article from '../../components/articals/Article';
import { blog01,blog02,blog03,blog04,blog05 } from './import';


const Blog = () => {
  const title = "GPT-3 and Open AI is the future. Let us explore how it is?"

  return (
    <div className='gpt3__blog section__padding' id='blog'>
        <div className='gpt3__blog-heading'>
            <h1>A lot is happening, we are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
            <div className='gpt3__blog-container_groupA'>
                <Article ImgUrl={blog01} date="Sep 26, 2021" title={title}/>
            </div>
            <div className='gpt3__blog-container_groupB'>
                <Article ImgUrl={blog02} date="Sep 28, 2021" title={title}/>
                <Article ImgUrl={blog03} date="Sep 30, 2021" title={title}/>
                <Article ImgUrl={blog04} date="Oct 01, 2021" title={title}/>
                <Article ImgUrl={blog05} date="Oct 03, 2021" title={title}/>
            </div>
        </div>
    </div>
  )
}

export default Blog