import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cartSlice';
import '../styles/CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleIncrease = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const handleDecrease = (itemId) => {
    dispatch(cartActions.removeFromCart(itemId));
  };

  const handleDelete = (itemId) => {
    dispatch(cartActions.deleteFromCart(itemId));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-summary">
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)} each</p>
            </div>
            <div className="item-actions">
              <div className="quantity-controls">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
            <div className="item-total">
              ${item.totalPrice.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-actions">
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        <button onClick={handleCheckout} className="checkout-btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;