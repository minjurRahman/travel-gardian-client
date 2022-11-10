import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard';

const Service = () => {
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useTitle('Service')
    
    useEffect( () =>{
        fetch('https://travel-guardian-server-site.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            if(loading){
                <progress className="progress w-56"></progress>
            }
            setServices(data)
        })
    } , [])

    return (
        <div className='mt-7 py-4 border rounded-lg'>
            <div className='text-center mb-7'>
                <h1 className='text-5xl py-3 font-bold text-info '>Services</h1>
                <h2 className='text-4xl font-bold'>Take a Tour with us</h2>
                <p className='py-3'>We are offer you to get a tour with us. Here we give you a three days package for a tour in any where in Bangladesh.</p>
            </div>
            <div className=''>
                {
                    services.map(service => <ServiceCard 
                    key= {service.id}   //service._id
                    service={service}
                    ></ServiceCard>)
                }
                
            </div>
            <div className='text-center'>
            <Link to='/more-services'><button className="btn btn-info">See All</button></Link>
            </div>
        </div>
    );
};

export default Service;