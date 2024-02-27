import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { CartContext } from "../ContextAPI/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          <Link className="text-black" to="/">
            <img
              src="https://www.svgrepo.com/show/303110/apple-black-logo.svg"
              alt="icon"
              style={{ width: "40px",height: "40px" }}
            />
          </Link>
        </a>

        <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
          <li className="nav-item ">
            <Link
              className="text-black"
              style={{
                fontWeight: "bold",
              }}
              to="/"
            >
              SHOP
            </Link>
          </li>
        </ul>

        <Link className="text-black" to="/cart">
          <ShoppingCart size={32} style={{ color: "#222222" }} />

          <span
            className="postion-absolute top-0 start-100 translate-middle badge  text-white rounded-pill "
            style={{ backgroundColor: "#ff6900" }}
          >
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
