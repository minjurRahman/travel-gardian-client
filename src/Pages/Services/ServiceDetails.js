import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewDisplay from './ReviewDisplay';
import ServiceReview from './ServiceReview';

const ServiceDetails = () => {
    const { _id, title, image, details, price} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;


        const review = {
            place: _id,
            placeName: title,
            customer: name,
            email,
            phone,
            message
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
        <div>
            <div className="card card-compact w-4/5 m-auto py-20 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-5xl">{title}</h2>
                    <p><span className='font-bold'>Details About {title}: </span> {details}</p>
                    <div className="card-actions">
                        <p className='text-2xl text-info font-bold'>Three Days Cost: {price} tk</p>
                        <Link to='/'><button className="btn btn-primary">Home</button></Link>
                        <Link to='/checkout'><button className="btn btn-primary">Add Service</button></Link>
                    </div>
                </div>
          </div>
        
        <ReviewDisplay></ReviewDisplay>

        {/* Service Review */}
        <ServiceReview handleReview={handleReview}></ServiceReview>



        {/* <form onSubmit={handleReview} className='py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                </div>
                <div className='p-5'>
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Please text your more details"></textarea>
                    <input className='btn btn-info' type="submit" name="" id="" value='Review Submit'/>
                </div>
            </form>         */}

        </div>
    );
};

export default ServiceDetails;