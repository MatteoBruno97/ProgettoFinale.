import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import carrello from "./immagini/sfondo/carrello.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.prezzo * item.count,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid container">
        <h3 className="navbar-brand" style={{ marginLeft: "20px" }}>
          Menù
        </h3>
        <button
        
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarNavAltMarkup"  className="collapse navbar-collapse">
          <div className="navbar-nav mx-auto">
            <Link className="nav-link" to={"/"}>
              -Antipasti-
            </Link>
            <Link className="nav-link" to={"/Primi"}>
              -Primi-
            </Link>
            <Link className="nav-link" to={"/Secondi"}>
              -Secondi-
            </Link>
            <Link className="nav-link" to={"/Sushi"}>
              -Sushi-
            </Link>
            <Link className="nav-link" to={"/Salse"}>
              -Salse-
            </Link>
            <Link className="nav-link" to={"/Dolci"}>
              -Dolci-
            </Link>
            <Link className="nav-link" to={"/Bibite"}>
              -Bibite-
            </Link>
          </div>
        </div>
        <Link className="nav-link" to={"/Carrello"}>
          <img style={{ marginRight: "20px" }} src={carrello} alt="" />
        </Link>
      </div>


      <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
      integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
      crossOrigin="anonymous"
    ></script>
    </nav>
  );
};

export default Navbar;
