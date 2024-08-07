import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./whats.css";

const WhatsApp = () => {
  return (
    <Link to="https://wa.me/96594903036" target="_blank">
      <button className="whatsPhone">
        تواصل معنا <i className="bi bi-whatsapp"></i>
      </button>
    </Link>
  );
};

export default WhatsApp;
