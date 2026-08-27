import { HomePage } from './pages/HomePage'
import Checkout from './pages/Checkout'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App
