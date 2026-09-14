import './FeatureCard.css';

function FeatureCard({ icon, title, text, layout }) {
  return (
    <div className={`feature-card ${layout === 'horizontal' ? 'feature-horizontal' : 'feature-vertical'}`}>
      <div className="feature-icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <div className="feature-text-wrap">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{text}</p>
      </div>
    </div>
  );
}

export default FeatureCard;