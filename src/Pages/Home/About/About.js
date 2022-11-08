import React from 'react';

const About = () => {
    return (
    <div className="hero min-h-screen mt-7 mb-7 bg-base-200">
        
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='w-1/2'>
                <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt='' className="rounded-lg shadow-2xl" />
            </div>
            <div className='w-1/2'>
            <h1 className='text-4xl text-info font-bold mb-4'>About Us</h1>
                <h1 className="text-5xl font-bold">Welcome to Travel Guardian</h1>
                <p className="py-6">We provide international travel products & services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations. From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say & say what we do.</p>
                <button className="btn btn-info">Get More Info</button>
            </div>
        </div>
   </div>
    );
};

export default About;