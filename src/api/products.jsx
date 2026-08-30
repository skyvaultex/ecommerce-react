import axios from 'axios'

export function fetchData() {
  return axios
    .get('http://localhost:3000/api/products')
    .then(response => response.data);
}