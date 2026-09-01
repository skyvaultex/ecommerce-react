import { useState, useEffect } from 'react'
import { fetchCart } from '../api/cart'

export function useCart() {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetchCart()
      .then(cart => setCart(cart));
  }, [])

  return cart;
}