import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title, image, details, price} = useLoaderData();

    return (
        <div>
            <div className="card card-compact w-4/5 m-auto py-20 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-5xl">{title}</h2>
                    <p><span className='font-bold'>Details About {title}: </span> {details}</p>
                    <div className="card-actions">
                        <p className='text-2xl text-info font-bold'>Three Days Cost: {price} tk</p>
                        <button className="btn btn-primary">Tour Now</button>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default ServiceDetails;