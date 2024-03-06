import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const store = useSelector(store => store);
  return (
    <nav className="h-12 border flex items-center px-5">
      <div>Navbar</div>
      <div className="ms-auto flex">
        <Link to="/add-cart">
          <p>{store.length}</p>
          <i className="fi fi-rr-shopping-cart "></i>
        </Link>
      </div>
    </nav>
  );
}
