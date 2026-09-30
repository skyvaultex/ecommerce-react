import { useEffect, useState } from 'react'
import axios from 'axios'

export function useProducts({ search }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products', {
      params: search ? { search } : undefined
    }).then(response => {
      setProducts(response.data);
    });
  }, [search]);

  return products;
}