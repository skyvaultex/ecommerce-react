import { useState, useEffect } from 'react'
import { fetchPaymentSummary } from '../api/paymentSummary'

export function usePaymentSummary({ cart }) {
  const [paymentSummary, setPaymentSummary] = useState(null);
  
  useEffect(() => {
    fetchPaymentSummary()
      .then(paymentSummary => setPaymentSummary(paymentSummary));
  }, [cart])

  return paymentSummary;
}