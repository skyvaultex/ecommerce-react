import { HomePage } from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import TrackingPage from './pages/tracking/TrackingPage'
import OrdersPage from './pages/orders/OrdersPage'
import { Routes, Route } from 'react-router'
import { useEffect } from 'react'
import { useCart } from './hooks/useCart'
import axios from 'axios'
import './App.css'

function App() {
  
  useEffect(() => {
    if(import.meta.env.DEV) window.axios = axios;
  }, [])

  const { cart, addToCart, loadCart } = useCart();

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} addToCart={addToCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="/tracking/:orderId/:productId/" element={<TrackingPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart} addToCart={addToCart} />} />
    </Routes>
  )
}

export default App
