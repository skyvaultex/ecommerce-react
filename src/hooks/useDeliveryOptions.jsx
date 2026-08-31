import { useState, useEffect } from 'react'
import { fetchDeliveryOptions } from '../api/deliveryOptions'

export function useDeliveryOptions() {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    fetchDeliveryOptions()
      .then((deliveryOptions) => {
        setDeliveryOptions(deliveryOptions);
      })
  }, [])

  return deliveryOptions;
}