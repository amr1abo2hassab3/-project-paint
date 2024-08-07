import { Link } from "react-router-dom";
import "./ContactCall.css"

const ConatctCall = () => {
    return (
      <div>
        <Link to="tel:+96594903036" className="ContactCall">
          <i className="bi bi-telephone"></i>
        </Link>
      </div>
    );
}

export default ConatctCall ;