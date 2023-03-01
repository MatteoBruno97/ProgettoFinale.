import React from "react";
import Cards from "./Cards";

import barbecue from "./immagini/salse/barbecue.jpg";
import ketchup from "./immagini/salse/ketchup.png";
import maionese from "./immagini/salse/maionese.png";
import mostarda from "./immagini/salse/mostarda.jpg";
import salsaAgrodolce from "./immagini/salse/salsaAgrodolce.jpg";
import salsaPiccante from "./immagini/salse/salsaPiccante.jpg";
import salsaRosa from "./immagini/salse/salsaRosa.jpg";
import salsaSoia from "./immagini/salse/salsaSoia.jpg";

const Salse = () => {
  const state = [
    {
      id: 0,
      nome: "salsa barbecue",
      description: "salsa barbecue",
      prezzo: 0.5,
      immagini: barbecue,
    },
    {
      id: 1,
      nome: "ketchup",
      description: "bustina ketchup 20 gr",
      prezzo: 0.2,
      immagini: ketchup,
    },
    {
      id: 2,
      nome: "maionese",
      description: "bustina maionese 17gr",
      prezzo: 0.2,
      immagini: maionese,
    },
    {
      id: 3,
      nome: "mostarda",
      description: "bustina mostarda 11gr",
      prezzo: 0.1,
      immagini: mostarda,
    },
    {
      id: 4,
      nome: "salsa rosa",
      description: "salsa Rosa",
      prezzo: 0.5,
      immagini: salsaRosa,
    },
    {
      id: 5,
      nome: "salsa di soia",
      description: "salsa di soia",
      prezzo: 0.5,
      immagini: salsaSoia,
    },
    {
      id: 6,
      nome: "salsa agrodolce",
      description: "salsa agrodolce",
      prezzo: 0.5,
      immagini: salsaAgrodolce,
    },
    {
      id: 7,
      nome: "salsa piccante",
      description: "salsa piccante",
      prezzo: 0.5,
      immagini: salsaPiccante,
    },
  ];
  return (
    <div className="container row" style={{ marginLeft: "100px" }}>
      {state.map((cards) => (
        <Cards
          key={cards.id}
          nome={cards.nome}
          prezzo={cards.prezzo}
          description={cards.description}
          immagini={cards.immagini}
        />
      ))}
    </div>
  );
};
export default Salse;
