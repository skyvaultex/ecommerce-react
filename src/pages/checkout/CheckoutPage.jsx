import './Checkout.css'
import './checkout-header.css'
import { CheckoutProducts } from '../../components/CheckoutProducts'
import { PaymentSummary } from '../../components/PaymentSummary'
import { Link } from 'react-router'

function CheckoutPage ({ cart }) {
  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">3 Items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
              <CheckoutProducts cart={cart}/>
          </div>
      
        <PaymentSummary />
        </div>
      </div>
    </>
  )
}

export default CheckoutPage;