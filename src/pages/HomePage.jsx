import Header from '../components/Header'
import { Products } from '../components/Products'
import './HomePage.css'

export function HomePage() {

  return (
    <>
      <title> E-Commerce </title>

      <Header />

      <div className="home-page">
        <div className="products-grid">
          <Products />
        </div>
      </div>
    </>
  )
}