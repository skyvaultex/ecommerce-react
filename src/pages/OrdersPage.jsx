import './OrdersPage.css'
import Header from '../components/Header'
import { Orders } from '../components/Orders'

function OrdersPage({ cart }) {

  return (
    <>
      <title> Orders </title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <Orders />
        </div>
      </div>
    </>
  )
}

export default OrdersPage;