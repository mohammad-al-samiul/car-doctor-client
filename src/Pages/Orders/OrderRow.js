/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const OrderRow = ({ order, handleDelete, handleUpdate }) => {
  const { serviceName, price, img, _id, status } = order;
  console.log(status);
  return (
    <>
      <tr>
        <td>
          <button onClick={() => handleDelete(_id)}>X</button>
        </td>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" w-28 h-28 rounded-lg ">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
            </div>
          </div>
        </td>
        <td className="font-bold">{price}</td>
        <td>Perple</td>
        <th>
          <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">
            {status ? status : 'Pending'}
          </button>
        </th>
      </tr>
    </>
  );
};

export default OrderRow;
