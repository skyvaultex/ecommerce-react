import axios from 'axios'

export async function fetchOrders() {
  const response = await axios.get('api/orders?expand=products');
  return response.data;
}