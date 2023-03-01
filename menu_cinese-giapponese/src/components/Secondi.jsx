import React from "react";
import Cards from "./Cards";

import anatraArancia from "./immagini/secondi/anatraArancia.jpg";
import anatraArrosto from "./immagini/secondi/anatraArrosto.jpg";
import anatraPiastra from "./immagini/secondi/anatraPiastra.jpg";
import anatraPiccante from "./immagini/secondi/anatraPiccante.jpg";
import polloAlCurry from "./immagini/secondi/polloAlCurry.jpg";
import polloBamboo from "./immagini/secondi/polloBamboo.jpg";
import polloFrittoAgrodolce from "./immagini/secondi/polloFrittoAgrodolce.jpg";
import polloLimone from "./immagini/secondi/polloLimone.jpg";
import calamariFritti from "./immagini/secondi/calamariFritti.jpg";

const Secondi = () => {
  const state = [
    {
      id: 0,
      nome: "Pollo al Curry",
      description: "Ingredienti: pollo, cipolla, funghi e salsa curry",
      prezzo: 5.8,
      immagini: polloAlCurry,
    },
    {
      id: 1,
      nome: "Pollo al Limone",
      description: "Ingredienti: petto di pollo fritto, farina e limone",
      prezzo: 5.8,
      immagini: polloLimone,
    },
    {
      id: 2,
      nome: "Pollo con Funghi e Bambù",
      description: "ingredienti: Pollo, funghi e bambù",
      prezzo: 5.8,
      immagini: polloBamboo,
    },
    {
      id: 3,
      nome: "Pollo Fritto Agrodolce",
      description:
        "ingredienti: pollo, farina, salsa agrodolce, ananas e peperoni",
      prezzo: 5.8,
      immagini: polloFrittoAgrodolce,
    },
    {
      id: 4,
      nome: "Anatra Arrosto",
      description: "ingredienti: anatra arrosto",
      prezzo: 7.3,
      immagini: anatraArrosto,
    },
    {
      id: 5,
      nome: "Anatra Piccante",
      description:
        "ingredienti: anatra, carote, cipolla, peperone e salsa piccante",
      prezzo: 7.0,
      immagini: anatraPiccante,
    },
    {
      id: 6,
      nome: "Anatra all’Arancia",
      description: "Ingredienti: anatra, arancia",
      prezzo: 7.3,
      immagini: anatraArancia,
    },
    {
      id: 7,
      nome: "Anatra alla Piastra",
      description: "ingredienti: anatra, cipolla e cipollina",
      prezzo: 7.0,
      immagini: anatraPiastra,
    },
  ];
  return (
    <div className="container row" style={{ marginLeft: "100px" }}>
      {state.map((cards) => (
        <Cards
          key={cards.id}
          nome={cards.nome}
          description={cards.description}
          prezzo={cards.prezzo}
          immagini={cards.immagini}
        />
      ))}
    </div>
  );
};

export default Secondi;
