import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";

const Cards = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleAddToCart = (props) => {
      setCartItems([...cartItems, {props}]);
      
  };

  const handleClick = (action, props) => {
    if (action === "add") {
      setCount(count + 1);
      handleAddToCart(props, count + 1);
    }
  };

  return (

   <div className="col">
    
      <div
        className="card"
        style={{
          width: "18rem",
          height: "30rem",
          textAlign: "center",
          borderRadius: "30px",
          marginTop: "60px",
        }}
      >
        <img
          src={props.immagini}
          style={{ height: "200px", borderRadius: "30px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.nome}</h5>
          <p className="description">{props.description}</p>
          <p className="card-text"> € {props.prezzo}</p>
          <div className="form-inline">
            <button
              id="add"
              className="btn btn-sm btn-outline-primary"
              style={{ height: "30px", width: "100px", marginTop: "10px" }}
              onClick={(event) => handleClick("add", props)}
            >
              Add
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

