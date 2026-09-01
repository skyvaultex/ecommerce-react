import axios from 'axios'
import { useState, useEffect } from 'react'

async function fetchCart() {
  return axios
    .get('/api/cart-items?expand=product')
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