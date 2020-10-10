import React from 'react';

import Background from '../assets/images/AbstractBackground.jpg';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {
    
    return(
        <div style={{ background: `url(${Background})`, }}>
            <div>
                <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
                <Carousel />
            </div>
        </div>
    );
}

export default HomePage;