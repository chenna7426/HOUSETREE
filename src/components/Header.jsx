import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          GreenThumb Haven
        </Link>
        <nav>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;