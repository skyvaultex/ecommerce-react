import axios from 'axios'

export function fetchPaymentSummary() {
  return axios.get('/api/payment-summary')
    .then(paymentSummary => paymentSummary.data);
}