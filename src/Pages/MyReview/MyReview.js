import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const  [reviews, setReviews] = useState([]);


    useEffect( () =>{
        fetch(`http://localhost:5000/displayReview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
     }, [user?.email])

     const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review?')
        if(proceed){
            fetch(`http://localhost:5000/userReview/${id}`, {
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
        fetch(`http://localhost:5000/userReview/${id}`, {
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