import { useProducts } from '../context/ProductContext';
import './ProductGrid.css';

function ProductGrid({ title, category }) {
  const { products, loading } = useProducts();

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="product-grid-section">
      <h2 className="product-grid-title">{title}</h2>
      {loading ? (
        <div className="p-4 text-center text-muted">Loading collection...</div>
      ) : filteredProducts.length === 0 ? (
        <div className="p-4 text-muted">No products available in this category.</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product, idx) => (
            <div key={product.id || idx} className="grid-card">
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
      )}
      <button className="see-more-btn">SEE MORE →</button>
    </div>
  );
}

export default ProductGrid;