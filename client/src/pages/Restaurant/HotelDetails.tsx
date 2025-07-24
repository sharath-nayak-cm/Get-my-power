import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchHotels } from '../../features/hotelSlice';
import '../../components/HotelList.css'


const HotelDetails = () => {
    const dispatch = useAppDispatch();
    const {list,loading,error} = useAppSelector(state => state.hotel)
    console.log('List from Redux store:', list); 

    useEffect(() => {
        dispatch(fetchHotels());
    },[]);

    return (
    <div className="hotel-list-container">
      <div className="hotel-list-header">
         <h2>List of Hotels</h2>
      </div>
       
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="hotel-list">
          {list.map((hotel,index) => (
            <li key={ index} className='hotel-card'>
              <h3>{hotel.name}</h3>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-location">{hotel.phone}</p>
            </li>
          ))}
      </ul>
      <Link to="/Addhotel" className="add-hotel-btn">Add Hotels</Link>

    </div>
  );

}

export default HotelDetails;