import { Link } from "react-router-dom";
import "./Amr.css"

const Amr = () => {
  return (
    <div className="end">
      <span>
        © حقوق النشر 2024، جميع الحقوق محفوظة للبشمهدس
        <Link
          target="_blank"
          to="https://www.facebook.com/amr.mohammadabohassab"
          rel="noreferrer"
        >
        Amr Abo Hassab
        </Link>
      </span>
    </div>
  );
};

export default Amr;
