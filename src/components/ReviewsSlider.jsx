import { useState, useEffect } from 'react';
import './ReviewsSlider.css';

const reviews = [
  { name: 'Cynthia Caroline', date: '15 July 2023', text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus.' },
  { name: 'Cynthia Caroline', date: '15 July 2023', text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus.' },
  { name: 'Cynthia Caroline', date: '15 July 2023', text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus.' },
  { name: 'Cynthia Caroline', date: '15 July 2023', text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus.' },
  { name: 'Cynthia Caroline', date: '15 July 2023', text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus.' },
  { name: 'Cynthia Caroline', date: '15 July 2023', text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus.' },
  { name: 'Cynthia Caroline', date: '15 July 2023', text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus.' },
];

function ReviewsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 992) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  useEffect(() => {
    if (startIndex > maxIndex) {
      setStartIndex(maxIndex);
    }
  }, [maxIndex, startIndex]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="reviews-section">
      <div className="reviews-track-wrapper">
        <div
          className="reviews-track"
          style={{ transform: `translateX(calc(-${startIndex} * ((100% + 20px) / ${visibleCards})))` }}
        >
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="review-avatar"></div>
                <div>
                  <p className="review-name">{review.name}</p>
                  <p className="review-date">{review.date}</p>
                </div>
                <p className="review-stars">★★★★★</p>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="slider-btn slider-btn-left" onClick={prevSlide} aria-label="Previous review">‹</button>
      <button className="slider-btn slider-btn-right" onClick={nextSlide} aria-label="Next review">›</button>
    </div>
  );
}

export default ReviewsSlider;