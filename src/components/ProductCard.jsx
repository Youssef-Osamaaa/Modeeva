import './ProductCard.css';

function ProductCard({ name, price, image, reverse }) {
  return (
    <div className={`product-card d-flex ${reverse ? 'flex-row-reverse' : ''}`}>
      <img src={image} alt={typeof name === 'string' ? name : 'Product'} className="product-card-img" />
      <div className="product-card-info">
        <h4 className="product-card-name">{name}</h4>
        <p className="product-card-price">{price}</p>
        <a href="/" className="product-card-link">SHOP NOW</a>
      </div>
    </div>
  );
}

export default ProductCard;