import './Categories.css';
import CategoryCard from './CategoryCard';
import womanImg from '../assets/images/4.jpg';
import casualImg from '../assets/images/5.jpg';
import menImg from '../assets/images/6.jpg';

function Categories() {
  return (
    <div className="categories-grid">
      <CategoryCard title="FORMAL WOMAN" image={womanImg} className="cat-top-left" />
      <CategoryCard title="FORMAL MEN" image={menImg} className="cat-bottom-left" />
      <CategoryCard title="CASUAL STYLE" image={casualImg} className="cat-right" />
    </div>
  );
}

export default Categories;