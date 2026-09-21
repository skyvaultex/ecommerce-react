import { useState, useEffect } from 'react'
import { fetchCart } from '../api/cart'
import axios from 'axios'

export function useCart() {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetchCart()
      .then(cart => setCart(cart));
  }, [])

  async function addToCart(productId, quantity = 1) {
    await axios.post('/api/cart-items', {
      productId,
      quantity
    })
    const updatedCart = await fetchCart();
    setCart(updatedCart);
  }

  async function loadCart() {
    const updatedCart = await fetchCart();
    setCart(updatedCart);
  }

  return {
    cart,
    addToCart,
    loadCart
  };
}