import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="container navSec">
        <ul>
          <li>
            <NavLink to={"/"}>الرئيسية</NavLink>
          </li>
          <li>
            <NavLink to={"/paint"}>صباغ</NavLink>
          </li>
          <li>
            <Link to={"tel:+96594903036"}>
              اتصل بنا <i className="bi bi-telephone"></i>
            </Link>
          </li>
          <li>
            <Link to="https://wa.me/96594903036" target="_blank"  >
              تواصل معنا <i className="bi bi-whatsapp"></i>
            </Link>
          </li>
        </ul>

        <i className="bi bi-list-task navList"></i>

        <h1>صباغ بالكويت</h1>
      </div>
    </nav>
  );
};

export default NavBar;
