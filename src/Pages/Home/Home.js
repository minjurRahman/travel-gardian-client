import React from 'react';
import About from './About/About';
import ChosesUs from './ChosesUS/ChosesUs';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <ChosesUs></ChosesUs>

        </div>
    );
};

export default Home;