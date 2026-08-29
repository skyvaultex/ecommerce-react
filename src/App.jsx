import { HomePage } from './pages/HomePage'
import Checkout from './pages/Checkout'
import Tracking from './pages/Tracking'
import Orders from './pages/Orders'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="orders" element={<Orders />} />
    </Routes>
  )
}

export default App
