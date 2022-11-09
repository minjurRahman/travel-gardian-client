import React, { useEffect, useState } from 'react';

const ReviewList = ({rev}) => {
    console.log(rev.placeName)
    const { placeName } = rev;
    const  [review, setReview] = useState({});


    useEffect( () =>{
        fetch(`http://localhost:5000/displayReview?placeName=${placeName}`)
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    }, [placeName])

    return (
        <div>
            <h1>ReviewList: {review.length}</h1>
        </div>
    );
};

export default ReviewList;