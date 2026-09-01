import { useState, useEffect } from 'react'
import { fetchOrders } from '../api/orders'

export function useOrders() {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    fetchOrders()
      .then(orders => setOrders(orders));
  }, []);
  
  return orders;
}