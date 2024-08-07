import { Link } from "react-router-dom";
import "./Contactwhats.css";
const ConatctWhats = () => {
  return (
    <div>
      <Link
        to="https://wa.me/96594903036"
        className="Contactwhats"
        target="_blank"
      >
        <i className="bi bi-whatsapp"></i>
      </Link>
    </div>
  );
};

export default ConatctWhats;
