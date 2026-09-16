import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar py-3">
      <div className="container-fluid px-lg-5 d-flex justify-content-between align-items-center">
        <a className="navbar-brand logo m-0" href="/">
          <span className="logo-teal">M</span>ODEVA
        </a>

        <ul className="nav-links d-none d-lg-flex list-unstyled mb-0 align-items-center gap-4">
          <li>
            <a
              href="/"
              className="nav-link-item d-flex align-items-center gap-1"
            >
              Catalog <i className="bi bi-chevron-down dropdown-arrow"></i>
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              Sale
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              New Arrival
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              Dashboard
            </a>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          <div className="search-wrapper d-none d-md-flex align-items-center px-3 py-1">
            <i className="bi bi-search search-icon me-2"></i>
            <input
              type="text"
              className="search-input bg-transparent border-0"
              placeholder="Search"
            />
          </div>
          <a href="/" className="icon-link d-none d-md-block">
            <i className="bi bi-person icon"></i>
          </a>
          <a href="/" className="icon-link">
            <i className="bi bi-cart3 icon"></i>
          </a>

          <button
            className="hamburger-btn d-lg-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="mobile-menu d-lg-none list-unstyled">
          <li>
            <a href="/" className="nav-link-item">
              Catalog
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              Sale
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              New Arrival
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-item">
              Dashboard
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
