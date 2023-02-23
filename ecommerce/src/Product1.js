import React from 'react';

// Create a reusable Product component that accepts product info as props
const Product1 = ({ img, name, description, price, rating }) => {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <h2>{name}</h2>
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
    "img": "https://via.placeholder.com/150x150.png?text=Product1",
    "name": "Brown eggs",
    "description": "Raw organic brown eggs in a basket",
    "price": 28.1,
    "rating": 4
  },
  {
    "img": "https://via.placeholder.com/150x150.png?text=Product2",
    "name": "Sweet fresh stawberry",
    "description": "Sweet fresh stawberry on the wooden table",
    "price": 29.45,
    "rating": 4
  },
  {
    "img": "https://via.placeholder.com/150x150.png?text=Product2",
    "name": "Tony",
    "description": "Sweet fresh stawberry on the wooden table",
    "price": 29.45,
    "rating": 4
  }
];

// Create a reusable main component that holds all the components
const App = () => {
  const productList = [];

  for (let i = 0; i < products.length; i++) {
    const product1 = products[i];
    productList.push(
      <Product1
        key={i}
        img={product1.img}
        name={product1.name}
        description={product1.description}
        price={product1.price}
        rating={product1.rating}
      />
    );
  }

  return (
    <div className="App">
      <h1>Products List</h1>
      {productList}
    </div>
  );
};

export default App;
