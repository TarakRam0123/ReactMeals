import React from "react";
import { Link } from "react-router-dom";
import Order from "./pages/Order";

const Navbar = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-lg-6 text-light ">
            <h1 className="float-start">React Meals</h1>
          </div>
          <div className="col-lg-6 text-light ">
            <ul className="my-3 d-flex justify-content-center gap-4 list-unstyled">
              <li>
                <Link to="/" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="order" className="text-light">
                  Order
                </Link>
              </li>

              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
