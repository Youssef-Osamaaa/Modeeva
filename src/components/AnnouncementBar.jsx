import { useState } from 'react';
import './AnnouncementBar.css';

function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="announcement-bar d-flex justify-content-center align-items-center position-relative py-2">
      <p className="mb-0 small">
        Discount 20% For New Member, <strong>ONLY FOR TODAY</strong>!!
      </p>
      <button
        type="button"
        className="btn-close btn-close-white position-absolute end-0 me-3"
        aria-label="Close"
        onClick={() => setIsVisible(false)}
      ></button>
    </div>
  );
}

export default AnnouncementBar;