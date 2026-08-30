import { useEffect, useState } from 'react'
import { fetchData } from '../api/products'

export function useProducts() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => { 
    fetchData().then(data => {
      setProducts(data)
    })
  }, []);

  return products;
}