import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';

const ReviewDisplay = () => {

    const [review, setReview] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/displayReview')
        .then(res => res.json())
        .then(data => setReview(data))
    } , [])

    return (
        <div>
            {
                review.map(rev => <ReviewList key={rev.id} rev={rev}></ReviewList>)
            }
        </div>
    );
};

export default ReviewDisplay;