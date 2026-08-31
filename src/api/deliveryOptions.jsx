import axios from 'axios'

export function fetchDeliveryOptions() {
  return axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
    .then(response => response.data);
}