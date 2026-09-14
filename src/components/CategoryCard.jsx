import './CategoryCard.css';

function CategoryCard({ title, image, className }) {
  return (
    <div className={`category-card ${className || ''}`}>
      <img src={image} alt={title} className="category-card-img" />
      <div className="category-card-overlay">
        <h3 className="category-card-title">{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;