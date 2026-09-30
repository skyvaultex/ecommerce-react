import { useEffect, useState } from 'react'
import { fetchData } from '../api/products'
import axios from 'axios'

export function useProducts({ search }) {
  const [products, setProducts] = useState([]);

  useEffect(() => { 
    if(search) {
      axios.get(`/api/products?search=${search}`)
        .then(res => setProducts(res.data));
    } else if (search === '') {
      fetchData().then(data => {
      setProducts(data)
    })
    }
  }, [search]);

  return products;
}