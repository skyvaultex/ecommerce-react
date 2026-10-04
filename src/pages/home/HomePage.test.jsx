import { it, describe, expect, vi, beforeEach } from 'vitest'
import { HomePage } from './HomePage'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {MemoryRouter} from 'react-router'
import axios from 'axios'

vi.mock('axios');

describe('HomePage Component', () => {

  let addToCart;
  beforeEach(() => {
    addToCart = vi.fn();
    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === '/api/products') {
        return {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: {
                stars: 4.5,
                count: 87
              },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"]
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: {
                stars: 4,
                count: 127
              },
              priceCents: 2095,
              keywords: ["sports", "basketballs"]
            }
          ]
        };
      }
    })
  });

  it('displays the products correctly', async () => {
    render(
      <MemoryRouter>
        <HomePage car={[]} addToCart={addToCart} />
      </MemoryRouter>
    )

    const product = await screen.findAllByTestId('product-container');
    expect(product.length).toBe(2);

    expect(
    within(product[0])
      .getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();

    expect(
      within(product[1])
        .getByText("Intermediate Size Basketball")
    ).toBeInTheDocument();
  })
})