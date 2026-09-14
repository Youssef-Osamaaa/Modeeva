import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import ReviewsSlider from './components/ReviewsSlider';

function App() {
  return (
    <div>
      <AnnouncementBar />
      <div className="hero-section position-relative">
        <Navbar />
        <Hero />
      </div>
      <Categories />
      <ProductGrid title="THE BEST DRESS FOR THE BEST WOMAN" category="Women" />
      <ProductGrid title="BEST OUTFIT FOR YOUR HAPPINESS" category="Men" />
      <Features />
      <ReviewsSlider />
      <Footer />
    </div>
  );
}

export default App;