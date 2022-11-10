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
            <div className=''>
                <img src={photoURL?.photoURL} alt="" />
             <ul className=" bg-base-100 w-full">
                <li>
                    Name: {customer}
                    <p>Review Details: {message}</p>
                </li>
             </ul>
            </div>
        </div>
    );
};

export default ReviewList;