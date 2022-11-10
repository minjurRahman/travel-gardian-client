import React, { } from 'react';

const Reviews = ({review, handleDelete, handleStatusUpdate}) => {
    const { _id, placeName, email, message } = review;

    return (
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error'>X</button>
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
                <th>
                    <button onClick={() => handleStatusUpdate(_id)} className='btn btn-outline btn-info'>Edit</button>
                </th>
         </tr>

    );
};

export default Reviews;