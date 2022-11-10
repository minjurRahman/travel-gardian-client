import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';

const ReviewDisplay = () => {

    const [review, setReview] = useState([]);

    useEffect( () =>{
        fetch('https://travel-guardian-server-site.vercel.app/displayReviews')
        .then(res => res.json())
        .then(data => setReview(data))
    } , [])

    return (
        <div className='mt-4'>
            {
                review.map(rev => <ReviewList key={rev._id} rev={rev}></ReviewList>)
            }
        </div>
    );
};

export default ReviewDisplay;