import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaSnapchat
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* LOGO WITH LINES */}
      <div className="footer-logo-line">
        <span></span>
        <img src={require("./images/logos-4.png")} alt="Brave League" />
        <span></span>
      </div>

      {/* MAIN GRID */}
      <div className="footer-grid">
        {/* Contact */}
        <div className="footer-col">
          <h4 className="margin">Contact Us</h4>
          <p className="gold">If You Have Any Message,</p>
          <p className="gold">Feel Free To Call</p>
          <p className="phone gold">17777777</p>
        </div>

        {/* Map / Address */}
        <div className="footer-map">
          <h4 className="margin">Address</h4>
          <img  className="img" src={require("./images/maps.png")} alt="Map" />
        </div>

        {/* Opening Hours */}
        <div className="footer-col">
          <h4 className="margin">Opening Hours</h4>
          <p className="bold">Saturday - Thursday</p>
          <p className="bold">9:00 AM - 6:00 PM</p>
          <p className="bold">Friday</p>
          <p className="bold">Closed</p>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-socials">
        <FaFacebook />
        <FaTwitter />
        <FaYoutube />
        <FaInstagram />
        <FaTiktok />
        <FaSnapchat />
        <FaLinkedin />
      </div>

      {/* COPYRIGHT + BUY TICKET */}
      <div className="footer-bottom">
        <p>© 2024 Copyright Brave Indian League. All Rights Reserved.</p>
        <button className="ticket-btn">Buy Ticket</button>
      </div>

    </footer>
  );
}
