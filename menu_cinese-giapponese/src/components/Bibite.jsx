import React from "react";
import Cards from "./Cards";

import acquaFrizzante from "./immagini/bibite/acquaFrizzante.jpg";
import acquaNaturale from "./immagini/bibite/acquaNaturale.jpg";
import asahi from "./immagini/bibite/asahi.jpg";
import castello from "./immagini/bibite/castello.jpg";
import cocaCola from "./immagini/bibite/cocaCola.jpeg";
import dolomiti from "./immagini/bibite/dolomiti.jpg";
import fanta from "./immagini/bibite/fanta.jpg";
import heineken from "./immagini/bibite/heineken.jpeg";
import tsingtao from "./immagini/bibite/tsingtao.jpg";

const Bibite = () => {
  const state = [
    {
      id: 0,
      nome: "Acqua Frizzante",
      description: "Acqua Frizzante 75cl",
      prezzo: 2.2,
      immagini: acquaFrizzante,
    },
    {
      id: 1,
      nome: "Acqua Naturale",
      description: "Acqua Naturale 75cl",
      prezzo: 2.2,
      immagini: acquaNaturale,
    },
    {
      id: 2,
      nome: "Coca Cola",
      description: "Coca Cola in lattina 0,33",
      prezzo: 2.0,
      immagini: cocaCola,
    },
    {
      id: 3,
      nome: "Fanta",
      description: "Fanta in lattina 0,33",
      prezzo: 2.0,
      immagini: fanta,
    },
    {
      id: 4,
      nome: "Asahi",
      description: "Birra Asahi bottiglia 0.50cl",
      prezzo: 5.5,
      immagini: asahi,
    },
    {
      id: 5,
      nome: "Castello",
      description: "Birra in bottiglia 0,33 ml",
      prezzo: 3.5,
      immagini: castello,
    },
    {
      id: 6,
      nome: "Dolomiti doppio malto",
      description: "Birra in bottiglia 0,33 ml",
      prezzo: 5.0,
      immagini: dolomiti,
    },
    {
      id: 7,
      nome: "Heineken 0,66",
      description: "Birra in bottiglia Heineken 0,66 ml",
      prezzo: 3.5,
      immagini: heineken,
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

export default Bibite;
