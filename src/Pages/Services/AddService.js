import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {

    const { user } = useContext(AuthContext);
    useTitle('Add-Service')

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const details = form.details.value;
        const photoURL = user.photoURL;

        const review = {
            email,
            title,
            image,
            price,
            photoURL,
            details,
        }


        fetch('http://localhost:5000/services', {
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
        <form onSubmit={handleReview} className='py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
                    <input name='title' type="text" placeholder="Place Name" className="input input-bordered w-full" />
                    <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                    <input name='price' type="number" placeholder="Price in tk" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                </div>
                <div className='p-5'>
                    <textarea name='details' className="textarea textarea-bordered h-24 w-full" placeholder="Please text details of the service"></textarea>
                    <input className='btn btn-info mt-2' type="submit" name="" id="" value='Review Submit'/>
                </div>
            </form>  
        </div>
    );
};

export default AddService;