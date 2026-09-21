import axios from 'axios'

export async function fetchCart() {
  const response = await axios.get('api/cart-items?expand=product');
  return response.data;
}