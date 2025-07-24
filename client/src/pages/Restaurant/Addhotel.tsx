import React, {useState} from "react"
import { useAppDispatch } from '../../store/hooks';
import {addHotel} from "../../features/hotelSlice"
import type { Hotel } from "../../types/hotel";

import HotelDetails from "./HotelDetails";


const AddHotel = () => {
const dispatch = useAppDispatch();
const [hotel,setHotel] = useState<Hotel>({ name: '', location: '', description:'', phone: 0, photos: '' });
const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addHotel(hotel));
    setShowForm(false); 
    setHotel({ name: '', location: '', description: '', phone: 0, photos: '' });
  };

return (
   <div className="home-container">
      <h1 className="home-title">Add New Hotel</h1>
      {showForm && (
        <form onSubmit={handleSubmit} className="form-card">
          <input placeholder="Name" value={hotel.name} onChange={(e) => setHotel({ ...hotel, name: e.target.value })} />
          <input placeholder="Location" value={hotel.location} onChange={(e) => setHotel({ ...hotel, location: e.target.value })} />
          <input placeholder="Phone" value={hotel.phone} onChange={(e) => setHotel({ ...hotel, phone: Number(e.target.value) })} />

          <button onClick={() => setShowForm(true)} type="submit" className="add-hotel-btn" style={{ marginBottom: '20px' }}>
            Add Hotel</button>
        </form>
      )}
      <h2 className="home-title">Hotel List</h2>
      <HotelDetails />
    </div>
  );

};


export default AddHotel