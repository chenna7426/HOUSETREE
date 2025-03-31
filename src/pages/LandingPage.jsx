import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>GreenThumb Haven</h1>
        <p>
          Welcome to GreenThumb Haven, your premier destination for beautiful and healthy houseplants.
          We carefully select and nurture each plant in our collection to ensure you receive the highest
          quality green companions for your home. With our expert care guides and dedicated customer
          support, we make it easy for both novice and experienced plant parents to create their
          perfect indoor garden.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;