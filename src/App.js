import React from 'react'
import {Navbar, Brand, CTA} from './components';
import {Blog,Features,Footer,Header,Possibility,WatGPT3} from './containers';
import './App.css';
 
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App