import './App.css'
import Card from './components/Card'

const App: React.FC = () => {
  return (
    <>
      <div className='card-component'>
        <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          title="Basic Tee"
          price="35"
          buttonText="Add to cart"
        />
        <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
          title="Basic White Tee"
          price="35"
          buttonText="Add to basket"
        />
        <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
          title="Basic Charcoal Tee"
          price="35"
          buttonText="Add to cart"
        />
        <Card
          imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
          title="Artwork Dots Tee"
          price="45"
          buttonText="Add to basket"
        />
      </div>
    </>
  )
}

export default App
