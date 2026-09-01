import { useState, useEffect } from 'react'
import { fetchPaymentSummary } from '../api/paymentSummary'

export function usePaymentSummary() {
  const [paymentSummary, setPaymentSummary] = useState(null);
  
  useEffect(() => {
    fetchPaymentSummary()
      .then(paymentSummary => setPaymentSummary(paymentSummary));
  }, [])

  return paymentSummary;
}