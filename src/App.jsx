import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// Import Pages
import Home from './pages/Home'
import HotelListing from './pages/HotelListing'
import HotelDetails from './pages/HotelDetails'
import Booking from './pages/Booking'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelListing />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App
