/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import OrderRow from '../../Pages/Orders/OrderRow';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  //console.log(orders);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Delete Successfully');
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify({ status: 'Approved' })
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = 'Approved';
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="rounded-none"></th>
              <th>Name</th>
              <th>Price</th>
              <th>Favorite Color</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  status={status}></OrderRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
