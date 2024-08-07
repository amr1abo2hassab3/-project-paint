import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavM.css";
import CallMe from "../callme/CallMe";
import WhatsApp from "../whatsApp/Whats";
import { useEffect } from "react";

const NavList = () => {
  useEffect(() => {
    let boxlist = document.querySelector(".listLinks");
    let closeNavBtn = document.querySelector(".closeNav");
    let navList = document.querySelector(".navList");
    // this function open navbar in page
    function openNav() {
      navList.addEventListener("click", () => {
        boxlist.style.right = "0";
      });
    }
    openNav();

    // this function close page in navbar
    function closeNavFunction() {
      closeNavBtn.addEventListener("click", () => {
        boxlist.style.right = "-500px";
      });
    }
    closeNavFunction();
  }, []);

  return (
    <div className="listLinks">
      <i className="bi bi-x-lg closeNav"></i>
      <ul>
        <li>
          <NavLink to={"/"}>الرئيسية</NavLink>
        </li>
        <li>
          <NavLink to={"/paint"}>صباغ</NavLink>
        </li>
        <h4>
          <Link to="tel:+96594903036" className="tellCall">
            اتصل بنا <i className="bi bi-telephone"></i>
          </Link>
        </h4>

        <h4>
          <Link
            to="https://wa.me/96594903036"
            target="_blank"
            className="tellWhats"
          >
            {" "}
            تواصل معنا <i className="bi bi-whatsapp"></i>
          </Link>
        </h4>
      </ul>
    </div>
  );
};

export default NavList;
