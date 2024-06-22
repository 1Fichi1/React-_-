import React from 'react';
import { useForm } from 'react-hook-form';

const Order = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert('Order placed successfully!');
    reset();
  };

  return (
    <div className="container mt-5">
      <h1>Place Your Order</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input {...register('name')} className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input {...register('address')} className="form-control" id="address" required />
        </div>
        <div className="mb-3">
          <label htmlFor="payment" className="form-label">Payment Method</label>
          <select {...register('payment')} className="form-control" id="payment" required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default Order;
