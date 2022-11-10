import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const MoreServices = () => {
    const [moreServices, setMoreServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/more-services')
        .then(res => res.json())
        .then(data => setMoreServices(data))
    } , [])
    return (
        <div className='mt-7 py-4 border'>
            <div className='text-center mb-7'>
                <h1 className='text-5xl py-3 font-bold text-info '>Services</h1>
                <h2 className='text-4xl font-bold'>Take a Tour with us</h2>
                <p className='py-3'>We are offer you to get a tour with us. Here we give you a three days package for a tour in any where in Bangladesh.</p>
            </div>
            <div className=''>
                {
                    moreServices.map(service => <ServiceCard 
                    key= {service.id}   //service._id
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
            <Link to='/more-services'><button className="btn btn-info">Explore More Places</button></Link>
            </div>

        </div>
    );
};

export default MoreServices;