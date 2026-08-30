import axios from 'axios'
import { useState, useEffect } from 'react'

function fetchCart() {
  return axios
    .get('http://localhost:3000/api/cart-items')
    .then(response => response.data);
}

export function useCart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetchCart().then(cart => {
      setCart(cart);
    })
  }, [])

  return cart;
}