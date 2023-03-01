import React from "react";
import Cards from "./Cards";

import nuvolette from "./immagini/antipasti/nuvolette.jpg";
import involtiniPrimavera from "./immagini/antipasti/involtiniPrimavera.jpg";
import algheFritte from "./immagini/antipasti/algheFritte.jpg";
import cheleGranchio from "./immagini/antipasti/cheleGranchio.jpg";
import patatineFritte from "./immagini/antipasti/patatineFritte.jpg";
import paneCinese from "./immagini/antipasti/paneCinese.jpg";
import ravioliCarne from "./immagini/antipasti/ravioliCarne.jpg";
import ravioliGamberi from "./immagini/antipasti/ravioliGamberi.jpg";
import takoYaki from "./immagini/antipasti/takoYaki.jpg";

const Antipasti = () => {
  const state = [
    {
      id: 0,
      nome: "Nuvolette",
      description: "Ingredienti: farina e gamberi",
      prezzo: 2.5,
      immagini: nuvolette,
    },
    {
      id: 1,
      nome: "Involtini primavera",
      description: "Ingredienti: farina, verza e carote",
      prezzo: 2.5,
      immagini: involtiniPrimavera,
    },
    {
      id: 2,
      nome: "Chele di Granchio",
      description: "Chele di Granchio, 2 pezzi",
      prezzo: 3.0,
      immagini: cheleGranchio,
    },
    {
      id: 3,
      nome: "Alghe Fritte",
      description: "Alghe Fritte",
      prezzo: 2.5,
      immagini: algheFritte,
    },
    {
      id: 4,
      nome: "Pane al vapore",
      description: "Ingredienti: farina e latte, 2 pezzi",
      prezzo: 2.5,
      immagini: paneCinese,
    },
    {
      id: 5,
      nome: "Patatine Fritte",
      description: "Patatine Fritte",
      prezzo: 3.5,
      immagini: patatineFritte,
    },
    {
      id: 6,
      nome: "Ravioli al Vapore",
      description:
        "Ingredienti: farina, verza, suino, cipollina, zenzero e salsa di soia, 4 pezzi",
      prezzo: 3.9,
      immagini: ravioliCarne,
    },
    {
      id: 7,
      nome: "Ravioli di Gamberi",
      description: "Ingredienti: farina di riso, suino e gamberi, 4 pezzi",
      prezzo: 3.9,
      immagini: ravioliGamberi,
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

export default Antipasti;
