import './Features.css';
import FeatureCard from './FeatureCard';

function Features() {
  return (
    <div className="features-grid">
      <div className="feature-left">
        <FeatureCard
          icon="bi-hand-thumbs-up"
          title="100% Satisfaction Guaranteed"
          text="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
          layout="vertical"
        />
      </div>
      <div className="feature-top-mid">
        <FeatureCard
          icon="bi-telephone"
          title="24/7 Online Service"
          text="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
          layout="horizontal"
        />
      </div>
      <div className="feature-bottom-mid">
        <FeatureCard
          icon="bi-rocket-takeoff"
          title="Fast Delivery"
          text="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
          layout="horizontal"
        />
      </div>
      <div className="feature-right">
        <FeatureCard
          icon="bi-credit-card"
          title="Payment With Secure System"
          text="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
          layout="vertical"
        />
      </div>
    </div>
  );
}

export default Features;