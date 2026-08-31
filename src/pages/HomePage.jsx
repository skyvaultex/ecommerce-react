import Header from '../components/Header'
import { Products } from '../components/Products'
import './HomePage.css'

export function HomePage({ cart }) {

  return (
    <>
      <title> E-Commerce </title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          <Products />
        </div>
      </div>
    </>
  )
}