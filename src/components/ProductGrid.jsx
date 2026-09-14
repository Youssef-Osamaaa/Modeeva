
import { useState, useEffect } from 'react';
import './ProductGrid.css';

function ProductGrid({ title, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://6aa2fdfbccb3db9689a731bf.mockapi.io/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setProducts(data);
      });
  }, []);

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="product-grid-section">
      <h2 className="product-grid-title">{title}</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="grid-card">
            <div className="grid-card-image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="rating-badge">⭐ {product.rating}</span>
            </div>
            <p className="grid-card-category">PRODUCT CATEGORY</p>
            <p className="grid-card-name">{product.name}</p>
            <p className="grid-card-price">{product.price}</p>
          </div>
        ))}
      </div>
      <button className="see-more-btn">SEE MORE →</button>
    </div>
  );
}

export default ProductGrid;