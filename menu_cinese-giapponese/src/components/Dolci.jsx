import React from "react";
import Cards from "./Cards";

import catalana from "./immagini/dolci/catalana.jpg";
import coccoRipieno from "./immagini/dolci/coccoRipieno.jpg";
import coppaCaffe from "./immagini/dolci/coppaCaffe.jpg";
import limoncello from "./immagini/dolci/limoncello.jpeg";
import pistacchio from "./immagini/dolci/pistacchio.jpg";
import spagnola from "./immagini/dolci/spagnola.jpg";
import stracciatella from "./immagini/dolci/stracciatella.jpg";
import tiramisu from "./immagini/dolci/tiramisu.jpg";
import tartufoClassico from "./immagini/dolci/tartufoClassico.jpg";

const Dolci = () => {
  const state = [
    {
      id: 0,
      nome: "Cocco Ripieno",
      description: "Cocco Ripieno",
      prezzo: 7.0,
      immagini: coccoRipieno,
    },
    {
      id: 1,
      nome: "Coppa Caffé",
      description: "Coppa Caffé",
      prezzo: 6.0,
      immagini: coppaCaffe,
    },
    {
      id: 2,
      nome: "Coppa Crema Catalana",
      description: "Coppa Crema Catalana",
      prezzo: 5.5,
      immagini: catalana,
    },
    {
      id: 3,
      nome: "Coppa Crema e Pistacchio",
      description: "Coppa Crema e Pistacchio",
      prezzo: 6.0,
      immagini: pistacchio,
    },
    {
      id: 4,
      nome: "Coppa Spagnola",
      description: "Coppa Spagnola",
      prezzo: 6.0,
      immagini: spagnola,
    },
    {
      id: 5,
      nome: "Coppa Stracciatella",
      description: "Coppa Stracciatella",
      prezzo: 6.0,
      immagini: stracciatella,
    },
    {
      id: 6,
      nome: "Coppa Tiramisù",
      description: "Coppa Tiramisù",
      prezzo: 5.5,
      immagini: tiramisu,
    },
    {
      id: 7,
      nome: "Flute Limoncello",
      description: "Flute Limoncello",
      prezzo: 5.5,
      immagini: limoncello,
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
export default Dolci;
