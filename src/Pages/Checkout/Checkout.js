import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const confirmShipping = () => {
    toast('Thank you for purchasing. In 24 hour you will get your product...!!!');
  };
  const  handleForm = (event) => {
    event.preventDefault();
  }
  return (
    <div className='w-50 mx-auto checkout-container'>
      <div className='checkout-from m-5'>
        <h3>Customer Information</h3>
        <form onSubmit={handleForm} className='login-from'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='' placeholder='Your Name' required />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='' placeholder='Your Email' required />
          <label htmlFor='address'>Address</label>
          <input type='text' name='street' id='' placeholder='Street' required />
          <input type='text' name='city' id='' placeholder='City' required />
          <div>
            <input type='text' name='country' id='' placeholder='Country' required />
            <input type='text' name='zip' id='' placeholder='Zip' required />
            <h4>Payment information</h4>
            <label htmlFor='card'>Card</label>
            <input type='text' name='card' id='' placeholder='Card Number MM/YY CVC' required />
            <input className='btn btn-primary' onClick={confirmShipping} type='submit' value='$99.00' />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
