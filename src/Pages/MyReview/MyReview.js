import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const  [reviews, setReviews] = useState([]);


    useEffect( () =>{
        fetch(`https://travel-guardian-server-site.vercel.app/displayReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('User-Token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
               return logOut();
            }
           return res.json();
        })
        .then(data => {
            setReviews(data);
        })
     }, [user?.email, logOut])


     const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review?')
        if(proceed){
            fetch(`https://travel-guardian-server-site.vercel.app/userReview/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(rvw => rvw._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`https://travel-guardian-server-site.vercel.app/userReview/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <h1 className='text-3xl p-3 text-info'>You have {reviews.length} reviews</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>

        </th>
        <th>Place-Name</th>
        <th>email</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            reviews.map(review => <Reviews 
            key={review._id}
            review={review}
            handleDelete={handleDelete}
            handleStatusUpdate={handleStatusUpdate}
            ></Reviews>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyReview;