import React, { } from 'react';

const Reviews = ({review}) => {
    const { customer, placeName, email, message, photoURL } = review;

    return (
            <tr>
                <th>
                    <label>
                        <button className='btn btn-outline btn-error'>X</button>
                    </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{placeName}</div>
                    </div>
                </div>
                </td>
                <td>
                     {email}
                </td>
                <td>{message}</td>
         </tr>

    );
};

export default Reviews;