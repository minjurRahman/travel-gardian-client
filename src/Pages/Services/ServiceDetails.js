import React, { useContext } from 'react';
import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewDisplay from './ReviewDisplay';
import ServiceReview from './ServiceReview';

const ServiceDetails = () => {
    const { _id, title, image, details, price} = useLoaderData();
    const { user } = useContext(AuthContext);
    const location = useLocation();
    useTitle('Service-Details')

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const photoURL = user.photoURL;
        const createDate = new Date();

        const review = {
            place: _id,
            placeName: title,
            customer: name,
            email,
            phone,
            message,
            photoURL,
            createDate
        }


        fetch('http://localhost:5000/userReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Your Review is Submitted');
                form.reset();
            }
        })
        .catch(error => console.error(error));


    }

    return (
        <div className='mb-3'>
            <div className="card card-compact w-4/5 m-auto py-20 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-5xl">{title}</h2>
                    <p><span className='font-bold'>Details About {title}: </span> {details}</p>
                    <div className="card-actions">
                        <p className='text-2xl text-info font-bold'>Three Days Cost: {price} tk</p>
                        <Link to='/'><button className="btn btn-info">Home</button></Link>
                        <Link to='/more-services'><button className="btn btn-info">Take a Tour with me</button></Link>
                    </div>
                </div>
          </div>
        
        <ReviewDisplay></ReviewDisplay>

        {
            user ?
            <ServiceReview handleReview={handleReview}></ServiceReview>
            :
            <span className='p-3'>Please <Link to='/login' state={{from: location}} replace><button className='btn btn-info btn-outline '>Login</button></Link> to add review</span>

        }

        </div>
    );
};

export default ServiceDetails;