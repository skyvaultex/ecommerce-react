import axios from 'axios'

export function fetchOrders() {
  return axios.get('api/orders?expand=products')
    .then(orders => orders.data);
}