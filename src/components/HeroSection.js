import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Ryan Soto</h1>
      <p>Software Developer. Game Developer. Dreamer. </p>
      <div className='hero-btns'>
        <Button
          buttonLink='/resume'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Résumé
        </Button>

        <Button
          buttonLink='/portfolio'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Portfolio
        </Button>

        <Button
          buttonLink='/about-me'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About Me
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
