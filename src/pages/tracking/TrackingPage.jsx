import './Tracking.css'
import Header from '../../components/Header'
import { useParams, Link } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

function TrackingPage({cart}) {
  const { orderId, productId } = useParams();
  const [ order, setOrder ] = useState(null);

  async function fetchOrder() {
    const response = await axios.get(`/api/orders/${orderId}?expand=products`);
    return response.data;
  }

  useEffect(() => {
    async function loadOrder() {
      const orders = await fetchOrder();
      setOrder(orders);
    }

    loadOrder();
  }, [orderId]);

  if(!order) return null;

  const orderProduct = order.products.find(
    item => item.productId === productId
  );

  if(!orderProduct) return null;

  const { name, image } = orderProduct.product;
  const deliveryTime = dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D');


  /* progress bar */

  const totalDeliveryMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  const deliveryProgress = 
    Math.min(
      Math.max(
        (( timePassedMs / totalDeliveryMs ) * 100)
      , 0)
    , 100);

    let status;
    if(deliveryProgress < 33) {
      status = 'preparing';
    } else if(deliveryProgress < 100 ) {
      status = 'shipped';
    } else {
      status = 'delivered';
    }

  
  return (
    <>
      <title> Tracking </title>

      <Header cart={ cart }/>

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {deliveryTime}
          </div>

          <div className="product-info">
            {name}
          </div>

          <div className="product-info">
            Quantity: {orderProduct.quantity}
          </div>

          <img className="product-image" 
            src={image}
            alt={name}
          />

          <div className="progress-labels-container">
            <div className={`progress-label ${status === 'preparing' && "current-status"}`}>
              Preparing
            </div>
            <div className={`progress-label ${status === 'shipped' && "current-status"}`}>
              Shipped
            </div>
            <div className={`progress-label ${status === 'delivered' && "current-status"}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div 
              className="progress-bar"
              style={{width: `${deliveryProgress}%`}}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrackingPage;