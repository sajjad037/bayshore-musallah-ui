import React from 'react'
import {Button} from '../common/button/Button'
import { Labels } from '../../constants/labels';

import "./HeroSection.css"
import "../../App.css"

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>{Labels.mosqueTitle}</h1>
      <p>{Labels.mosqueDescription}</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DONATE US <i className="fa-solid fa-hands-holding-heart"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
        >
          UP COMING EVENTS <i className="fa-solid fa-calendar-days"></i>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;