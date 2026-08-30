import Header from '../components/Header'
import Products from '../components/Products'
import './HomePage.css'

export function HomePage() {
  fetch('http://localhost:3000/api/products')
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    })

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