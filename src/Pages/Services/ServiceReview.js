import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceReview = ({handleReview}) => {

    const { user } = useContext(AuthContext)

    return (
        <div className='mt-7 p-5 border'>
        <form onSubmit={handleReview} className='py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" required/>
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                </div>
                <div className='p-5'>
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Please text your more details" required></textarea>
                    <input className='btn btn-info mt-2' type="submit" name="" id="" value='Review Submit'/>
                </div>
            </form>  
        </div>
    );
};

export default ServiceReview;