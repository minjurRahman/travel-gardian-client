import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {
    const {_id, image, title, price, details} = service;
    return (
        <div className="hero mb-4 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
              <div className='w-1/2'>
                <PhotoProvider>
                      <PhotoView src={image}>
                        <img src={image} alt="" />
                      </PhotoView>
                </PhotoProvider>
              </div>
              <div className='w-1/2'>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">
                  {details?.length > 100 ?
                  <>{details?.slice(0, 100) + '...'} <Link to={`/services/${_id}`}>See More</Link></> : <> {details}</>}
                </p>
                <p className='py-2 text-2xl text-orange-700 font-semibold'>Price: {price} tk</p>
                <Link to={`/services/${_id}`}>
                    <button className="btn btn-info">View Details</button>
                </Link>
              </div>
          </div>
        </div>
    );
};

export default ServiceCard;