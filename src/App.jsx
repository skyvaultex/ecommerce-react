import { HomePage } from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import TrackingPage from './pages/tracking/TrackingPage'
import OrdersPage from './pages/orders/OrdersPage'
import { Routes, Route } from 'react-router'
import { useCart } from './hooks/useCart'
import './App.css'

function App() {
  const cart = useCart();

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
    </Routes>
  )
}

export default App
