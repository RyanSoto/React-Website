import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <h1>Check out my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/coolbreezewebsite.png'
              text='Property management website with back-end utility.'
              label='CoolBreezeTexas.com'
              path='http://www.coolbreezetexas.com'
            />
            <CardItem
              src='images/PokeDash.png'
              text='Pokemon style delivery game with my interactive resume. '
              label='PokeDasher'
              path='http://www.ryan-soto.com/'
            />
            <CardItem
              src='images/Github.png'
              text='My personal Github. You can see the source code for any of my projects.'
              label='Github'
              path='https://github.com/RyanSoto?tab=repositories'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
