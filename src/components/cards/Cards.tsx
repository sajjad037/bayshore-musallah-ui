import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            imagePath='images/img-9.jpg'
                            imageAlt='Travel Image'
                            description='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            routePath='/services'
                        />
                        <CardItem
                            imagePath='images/img-2.jpg'
                            imageAlt='Travel Image'
                            description='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            routePath='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            imagePath='images/img-3.jpg'
                            imageAlt='Travel Image'
                            description='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            routePath='/services'
                        />
                        <CardItem
                            imagePath='images/img-4.jpg'
                            imageAlt='Travel Image'
                            description='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            routePath='/products'
                        />
                        <CardItem
                            imagePath='images/img-8.jpg'
                            imageAlt='Travel Image'
                            description='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            routePath='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;