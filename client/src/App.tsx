import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home'
import HotelDetails from './pages/Restaurant/HotelDetails';
import AddHotel from './pages/Restaurant/Addhotel'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/HotelDetails" element={<HotelDetails />} />
        <Route path="/Addhotel" element={<AddHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
