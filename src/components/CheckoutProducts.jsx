import { formatMoney } from '../utils/money'
import { useDeliveryOptions } from '../hooks/useDeliveryOptions'
import { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import './CheckoutProducts.css'

function DisplayQuantity({ cartItem, loadCart }) {
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  async function updateQuantity(event) {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);

    if (newQuantity === 0) {
      await axios.delete(`/api/cart-items/${cartItem.productId}`);
    } else {
      await axios.put(`/api/cart-items/${cartItem.productId}`, { quantity: newQuantity });
    }

    await loadCart();
    setIsEditing(false);
  }

  function escapeQuantity() {
    setQuantity(cartItem.quantity);
    setIsEditing(false);
  }

  return (
    <>
      <span>
        Quantity: <span className="quantity-label">
          {isEditing ? (
            <input
              type="text"
              className="update-quantity"
              value={quantity}
              onChange={event => setQuantity(Number(event.target.value))}
              onKeyDown={event => {
                if (event.key === 'Enter') updateQuantity(event);
                if (event.key === 'Escape') escapeQuantity();
              }}
            />
          ) : cartItem.quantity}
        </span>
      </span>
      <span
        className="update-quantity-link link-primary"
        onClick={() => setIsEditing(true)}
      >
        Update
      </span>
    </>
  )
}

export function CheckoutProducts({ cart, loadCart }) {
  const deliveryOptions = useDeliveryOptions();


  return deliveryOptions.length > 0 && cart.map((cartItem) => {
    const selectedDeliveryOption = deliveryOptions
      .find((deliveryOption) => {
        return deliveryOption.id === cartItem.deliveryOptionId
      });
    const { id, name, priceCents, image } = cartItem.product;
    const deleteCartItem = async () => {
      await axios.delete(`/api/cart-items/${cartItem.productId}`);
      await loadCart();
    };
    return (
      <div key={id} className="cart-item-container">
        <div className="delivery-date">
          {`Delivery date: ${dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}`}
        </div>

        <div className="cart-item-details-grid">
          <img className="product-image"
            src={image} />

          <div className="cart-item-details">
            <div className="product-name">
              {name}
            </div>
            <div className="product-price">
              ${formatMoney(priceCents)}
            </div>
            <div className="product-quantity">
              <DisplayQuantity cartItem={cartItem} loadCart={loadCart}/>
              <span className="delete-quantity-link link-primary"
                onClick={() => { deleteCartItem() }}>
                Delete
              </span>
            </div>
          </div>

          <div className="delivery-options">
            <div className="delivery-options-title">
              Choose a delivery option:
            </div>
            {
              deliveryOptions.map((deliveryOption) => {
                let priceString = 'FREE SHIPPING';
                if (deliveryOption.priceCents > 0) priceString = `$${formatMoney(deliveryOption.priceCents)} - Shipping`;
                const updateDeliveryOption = async () => {
                  await axios.put(`/api/cart-items/${cartItem.productId}`, {
                    deliveryOptionId: deliveryOption.id
                  })
                  await loadCart();
                }

                return (
                  <div key={deliveryOption.id} className="delivery-option"
                    onClick={() => { updateDeliveryOption() }}>
                    <input type="radio"
                      checked={deliveryOption.id === cartItem.deliveryOptionId}
                      onChange={() => { }}
                      className="delivery-option-input"
                      name={`delivery-option-${id}`} />
                    <div>
                      <div className="delivery-option-date">
                        {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                      </div>
                      <div className="delivery-option-price">
                        {priceString}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  })
}