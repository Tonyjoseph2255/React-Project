import React, { useState } from 'react';

// Create a reusable Product component that accepts product info as props
const Product = ({ img, title, description, price, rating }) => {
  return (
    <div className="product">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="price-rating">
        <p>${price}</p>
        <p>{rating} stars</p>
      </div>
      <div className="buttons">
        <button>Like</button>
        <button>Share</button>
        <button>Purchase</button>
      </div>
    </div>
  );
};

// Create an array of product information
const products = [
  {
    title: 'Brown eggs',
    type: 'dairy',
    description: 'Raw organic brown eggs in a basket',
    img: 'https://via.placeholder.com/150x150.png?text=Product1',
    price: 28.1,
    rating: 4,
  },
  {
    title: 'Sweet fresh stawberry',
    type: 'fruit',
    description: 'Sweet fresh stawberry on the wooden table',
    img: 'https://via.placeholder.com/150x150.png?text=Product2',
    price: 29.45,
    rating: 4,
  },
  {
    title: 'Tony',
    type: 'fruit',
    description: 'Sweet fresh stawberry on the wooden table',
    img: 'https://via.placeholder.com/150x150.png?text=Product2',
    price: 29.45,
    rating: 4,
  }
];

// Create a reusable main component that holds all the components
const App = () => {
  const [productList, setProductList] = useState(products);

  return (
    <div className="App">
      <h1>Products List</h1>
      {productList.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          type={product.type}
          description={product.description}
          img={product.img}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default App;
