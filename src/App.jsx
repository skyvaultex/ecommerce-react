import { HomePage } from './pages/HomePage'
import Checkout from './pages/Checkout'
import Tracking from './pages/Tracking'
import OrdersPage from './pages/OrdersPage'
import { Routes, Route } from 'react-router'
import { useCart } from './components/Cart'
import './App.css'

function App() {
  const cart = useCart();

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<Checkout cart={cart} />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
    </Routes>
  )
}

export default App
