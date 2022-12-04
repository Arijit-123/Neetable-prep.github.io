import React from 'react'
import './Svgcollection.css';
import Pic1 from './Pic1.js';



function Svgcollection() {
  return (
    <div id='svgcontrol'>
    
      <div id='svginspect'  className='carding'>
        <img src='/images/image1.svg' alt='newimage'/>
        <p>
            Light/dark mode
            </p>
      </div>
      <div  className='carding'>
        <img src='/images/image.svg' />
        <p>
            figma files included
        </p>
       
      </div>
      <div  className='carding'>
        <img src='/images/image3.svg' />
        <p>
            100+UI Flexible Sections
        </p>
      </div>
      <div className='carding'>
        <img src='/images/image45.svg' />
        <p>
            Free Lifetime Updates
        </p>
      </div>
      <div id='carouselresponsive'>
      
      </div>

    </div>
  )
}

export default Svgcollection
