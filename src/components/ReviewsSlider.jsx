import { useState } from 'react';
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

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews-section">
      <div className="reviews-track-wrapper">
        <div
          className="reviews-track"
          style={{ transform: `translateX(-${startIndex * 25}%)` }}
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

      <button className="slider-btn slider-btn-left" onClick={prevSlide}>‹</button>
      <button className="slider-btn slider-btn-right" onClick={nextSlide}>›</button>
    </div>
  );
}

export default ReviewsSlider;