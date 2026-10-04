import { it, describe, expect, vi, beforeEach } from 'vitest'
import { ProductCard } from './Products'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

vi.mock('axios');

let product;
let addToCart;

beforeEach(() => {
  product = {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"]
  };

  addToCart = vi.fn();
});

describe("ProductCard component", () => {
  it("It displays the product details correctly", () => {
    render(<ProductCard product={product} addToCart={addToCart} />)

    expect(screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")).toBeInTheDocument();
    expect(screen.getByText("$10.90")).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).
      toBeInTheDocument().
      toHaveAttribute('src', 'images/products/athletic-cotton-socks-6-pairs.jpg');
    expect(screen.getByTestId("product-rating-stars")).
      toBeInTheDocument().
      toHaveAttribute('src', `images/ratings/rating-${4.5 * 10}.png`);
    expect(screen.getByText(87)).
      toBeInTheDocument();
  })

  it('add a product to the cart', async () => {
    const user = userEvent.setup();
    render(<ProductCard product={product} addToCart={addToCart} />)

    const addToCartBtn = screen.getByTestId('add-to-cart-button');
    await user.click(addToCartBtn);

    expect(addToCart).toHaveBeenCalledWith(product.id, 1);
  })
})