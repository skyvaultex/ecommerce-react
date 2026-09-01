import { formatMoney } from '../utils/money'
import { useDeliveryOptions } from '../hooks/useDeliveryOptions'
import dayjs from 'dayjs'
/* refactor the delivery option logic */
export function CheckoutProducts({ cart }) {
  const deliveryOptions = useDeliveryOptions();

  
  return deliveryOptions.length > 0 && cart.map((cartItem) => {
    const selectedDeliveryOption = deliveryOptions
      .find((deliveryOption) => {
        return deliveryOption.id === cartItem.deliveryOptionId
    });
    const { id, name, priceCents, image } = cartItem.product;
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
              <span>
                Quantity: <span className="quantity-label">{cartItem.quantity}</span>
              </span>
              <span className="update-quantity-link link-primary">
                Update
              </span>
              <span className="delete-quantity-link link-primary">
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
                if(deliveryOption.priceCents > 0) priceString = `$${formatMoney(deliveryOption.priceCents)} - Shipping`;
                return (
                  <div key={deliveryOption.id}className="delivery-option">
                    <input type="radio" 
                      checked={deliveryOption.id === cartItem.deliveryOptionId}
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