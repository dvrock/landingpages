import { useState } from "react";
import logo from "./images/logos-4.png"; // use your logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Brave League" />
        </div>

        {/* Menu */}
        <nav className={`nav-menu ${open ? "open" : ""}`}>
          <a>Home</a>
          <a>Fighters</a>
          <a>Events</a>
          <a>News & Updates</a>
          <a>Media</a>
          <a>Rules & Regulations</a>
          <a>Fan Engagement</a>
          <a>About</a>
          <a>Contact</a>
        </nav>

        {/* CTA */}
        <div className="nav-cta">
          <button>Get Ticket</button>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
        <div></div>
      </div>
    </header>
  );
}
