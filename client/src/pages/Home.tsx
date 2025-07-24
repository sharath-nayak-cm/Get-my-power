import { Link } from 'react-router-dom';
import '../components/HotelList.css'
import '../components/Home.css';



const Home = () => {
  return (
   <div className="home-container">
    <h1 className="home-title">Welcome to Our Restaurant Portal</h1>
      <p>This is the landing page. Use the admin panel to manage hotel listings.</p>
      <div className="home-links">
        <Link to="/HotelDetails" className="home-card">Go to HotelDetails</Link>
        <Link to="/Addhotel" className="home-card">Add Hotels</Link>
      </div>
    </div>
  );
};

export default Home;
