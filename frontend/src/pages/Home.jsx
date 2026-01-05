import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <h1>Welcome to Greenery Tech (Pvt) Ltd</h1>
        <p>Your trusted supplier of RO plants, Accessories & Spare parts, Ice Machines & Cold Rooms</p>
      </header>

      <div className="categories">
        <Link to="/ice-machines" className="category-card">
          <img src="/images/ice machine images3.jpeg" alt="Ice Machines & Cold Rooms" />
          <h3>Ice Machines & Cold Rooms</h3>
        </Link>

        <Link to="/water-machines" className="category-card">
          <img src="/images/RO spare parts.jpeg" alt="RO plants, Accessories & Spare parts" />
          <h3>RO plants, Accessories & Spare parts</h3>
        </Link>
      </div>
    </div>
  );
}
