import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Callme.css"

const CallMe = () => {
    return (
      <Link to="tel:+96594903036" aria-label="call">
        <button className="numPhone">
          اتصل بنا <i className="bi bi-telephone"></i>
        </button>
      </Link>
    );
}



export default CallMe ;