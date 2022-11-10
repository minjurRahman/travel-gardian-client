import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Service from '../Services/Service';
import About from './About/About';
import ChosesUs from './ChosesUS/ChosesUs';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <About></About>
            <ChosesUs></ChosesUs>
        </div>
    );
};

export default Home;

