import './Hero.css';
import heroImg from '../assets/images/1.jpg';
import productImg from '../assets/images/2.jpg';
import ProductCard from './ProductCard';

function Hero() {
  return (
    <div className="hero position-relative">
      <img src={heroImg} alt="hero" className="hero-img" />

      <div className="hero-overlay">
        <p className="hero-subtitle">MADE IN INDONESIA, DEDICATED TO INDONESIA</p>
        <h1 className="hero-title">
          DISCOVER THE ART<br />OF DRESSING UP
        </h1>
      </div>

      <p className="hero-scroll">SCROLL DOWN ⌄</p>

      <div className="hero-products">
        <ProductCard name="Product Name in Here" price="$300.000" image={productImg} />
        <ProductCard name="Product Name in Here" price="$300.000" image={productImg} reverse />
      </div>
    </div>
  );
}

export default Hero;