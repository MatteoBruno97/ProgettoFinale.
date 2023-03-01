import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import Cards from "./Cards";

const Carrello = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const { cartItems, setCartItems, count, setCount } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderResponse, setOrderResponse] = useState(null);

  const handleOrder = () => {
    const order = [];
    cartItems.map((i) =>
      order.push({
        nomePiatto: i.props.nome,
        quantita: 1,
        prezzo: i.props.prezzo,
        oraOrdine: new Date().toISOString(),
      })
    );
  

    fetch("http://localhost:8080/api/ordini/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderResponse(data);
        navigate('/ordineEffettuato');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const remove = (nome) => {
    const index = cartItems.findIndex((item) => item.props.nome === nome);
    if (index !== -1) {
      setCount(count - 1);
      const newCart = [...cartItems];
      const removedItemPrice = newCart[index].props.prezzo;
      newCart.splice(index, 1);
      setCartItems(newCart);
      setTotalPrice(totalPrice - removedItemPrice);
    }
  };

  useState(() => {
    const total = cartItems.reduce((acc, item) => acc + item.props.prezzo, 0);
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className="card text-center ">
      {orderResponse && <div>{JSON.stringify(orderResponse)}</div>}
      {cartItems.map((item, i) => (
        <div className="card" key={i} style={{ top: "55px" }}>
          <div className="card-body text-dark position-relative">
            {item.props.nome}, {item.props.prezzo}
            <button
              id="remove"
              className="btn btn-sm btn-outline-danger"
              style={{ height: "30px", width: "100px", marginLeft: "10px" }}
              onClick={() => remove(item.props.nome)}
            >
              remove
            </button>
          </div>
        </div>
      ))}
      <div className="card-body fixed-bottom bg-dark text-white">
        <h5 className="card-title">Totale ordini</h5>
        <div>Total Price: €{totalPrice.toFixed(2)}</div>
        <button className="btn btn-primary" onClick={handleOrder}>
          Ordina qui!
        </button>
      </div>
    </div>
  );
};

export default Carrello;
