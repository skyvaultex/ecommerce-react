import axios from 'axios'

export function fetchCart() {
  return axios.get('api/cart-items?expand=product')
    .then(cart => cart.data);
}