import axios from 'axios'
import { useState, useEffect } from 'react'

function fetchCart() {
  return axios
    .get('/api/cart-items')
    .then(response => response.data);
}

export function useCart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetchCart().then(data => {
      setCart(data);
    })
  }, [])

  return cart;
}