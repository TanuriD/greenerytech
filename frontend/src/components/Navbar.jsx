import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 3‑hyphen (hamburger) button in top‑left, only when menu is closed */}
      {!isOpen && (
        <button
          className="hamburger-menu"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Sidebar navbar anchored to top-left, only shown when open */}
      {isOpen && (
        <nav className="navbar">
          <h2>Greenery Tech (Pvt) Ltd</h2>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/ice-machines" onClick={() => setIsOpen(false)}>
                Ice Machines & Cold Rooms
              </Link>
            </li>
            <li>
              <Link to="/water-machines" onClick={() => setIsOpen(false)}>
                RO plants, Accessories <br /> &amp; Spare parts
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
