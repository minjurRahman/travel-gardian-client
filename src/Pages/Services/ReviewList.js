import React, { useEffect, useState } from 'react';

const ReviewList = ({rev}) => {
    // console.log(rev)
    const { placeName, customer, message, photoURL  } = rev;
    const  [review, setReview] = useState({});


    useEffect( () =>{
        fetch(`https://travel-guardian-server-site.vercel.app/displayReview?placeName=${placeName}`)
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    }, [placeName])

    return (
        <div className='mb-4 p-4 border rounded'>
            <div className='w-full'>
                <img className='w-32' src={photoURL? photoURL : "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg"} alt="" />
                <p>Name: {customer}</p>
                <p>Review Details: {message}</p>
            </div>
        </div>
    );
};

export default ReviewList;