import Header from '../../components/Header'
import { Products } from '../../components/Products'
import './HomePage.css'
import { useSearchParams } from 'react-router'

export function HomePage({ cart, addToCart}) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  return (
    <>
      <title> E-Commerce </title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          <Products 
          cart={cart}
          addToCart={addToCart}
          search={search}
          />
        </div>
      </div>
    </>
  )
}