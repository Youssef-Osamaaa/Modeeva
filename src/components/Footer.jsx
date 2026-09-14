import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2 className="footer-logo">MODEVA</h2>
          <p><strong>WhatsApp</strong> : +62 859 9999 999</p>
          <p><strong>Email</strong> : hello@modeva.com</p>
          <p><strong>Address</strong> : Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</p>
        </div>

        <div className="footer-col">
          <h4>Menu</h4>
          <a href="/">Sale</a>
          <a href="/">New Arrivals</a>
          <a href="/">Formal Men</a>
          <a href="/">Formal Woman</a>
          <a href="/">Casual Men</a>
          <a href="/">Casual Woman</a>
        </div>

        <div className="footer-col">
          <h4>Get Help</h4>
          <a href="/">FAQ</a>
          <a href="/">Customer Service</a>
          <a href="/">Refund and Return</a>
          <a href="/">Terms and Conditions</a>
          <a href="/">Shipping</a>
        </div>

        <div className="footer-col">
          <h4>Account</h4>
          <a href="/">My Account</a>
          <a href="/">My Orders</a>
          <a href="/">Vouchers and Discounts</a>
        </div>
      </div>

      <p className="footer-copyright">
        All rights reserved<br />
        Copyright 2026 By Modeva Fashion
      </p>
    </footer>
  );
}

export default Footer;