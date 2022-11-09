import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const  [reviews, setReviews] = useState({});


    useEffect( () =>{
        fetch(`http://localhost:5000/displayReview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
     }, [user?.email])

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
            ></Reviews>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyReview;