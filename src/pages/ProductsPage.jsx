import { useDispatch, useSelector } from 'react-redux';
import { getPlantsByCategory } from '../data/plants';
import { cartActions } from '../store/cartSlice';
import '../styles/ProductsPage.css';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const plantsByCategory = getPlantsByCategory();

  const handleAddToCart = (plant) => {
    dispatch(cartActions.addToCart(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="products-page">
      <h1>Our Plants</h1>
      {Object.entries(plantsByCategory).map(([category, plants]) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plants-grid">
            {plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                  className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                >
                  {isInCart(plant.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;