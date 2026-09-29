import './OrdersPage.css'
import Header from '../../components/Header'
import { Orders } from '../../components/Orders'

function OrdersPage({ cart, addToCart }) {
  return (
    <>
      <title> Orders </title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <Orders addToCart={addToCart}/>
        </div>
      </div>
    </>
  )
}

export default OrdersPage;