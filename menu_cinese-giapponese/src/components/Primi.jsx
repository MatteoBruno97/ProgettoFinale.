import React from "react";
import Cards from "./Cards";

import risoCantonese from "./immagini/primi/risoCantonese.jpg";
import risoAnanas from "./immagini/primi/risoAnanas.jpg";
import gnocchiRiso from "./immagini/primi/gnocchiRiso.jpg";
import ramenInBrodo from "./immagini/primi/ramenInBrodo.jpg";
import ramenSaltato from "./immagini/primi/ramenSaltato.jpg";
import spaghettiAllaPiastra from "./immagini/primi/spaghettiAllaPiastra.jpg";
import udonSaltati from "./immagini/primi/udonSaltati.jpg";
import yakiSoba from "./immagini/primi/yakiSoba.jpg";
import spaghettiRiso from "./immagini/primi/spaghettiRiso.jpg";

const Primi = () => {
  const state = [
    {
      id: 0,
      nome: "Riso all'ananas",
      description: "Ingredienti: riso, ananas, pinoli e uovo",
      prezzo: 3.9,
      immagini: risoAnanas,
    },
    {
      id: 1,
      nome: "Riso alla Cantonese",
      description: "Ingredienti: riso, prosciutto cotto, piselli e uovo",
      prezzo: 3.9,
      immagini: risoCantonese,
    },
    {
      id: 2,
      nome: "Spaghetti alla piastra",
      description:
        "Ingredienti: spaghetti,verdure miste, carne, gamberi, e uovo",
      prezzo: 5.2,
      immagini: spaghettiAllaPiastra,
    },
    {
      id: 3,
      nome: "Gnocchi di Riso con Verdure",
      description:
        "Ingredienti: gnocchi di riso, carote, zucchine, funghi e bambù",
      prezzo: 4.5,
      immagini: gnocchiRiso,
    },
    {
      id: 4,
      nome: "Ramen in Brodo",
      description:
        "gamberi, polpetta di pesce, verdure e uovo sodo (prodotto preparato con ingredienti surgelati)",
      prezzo: 8.5,
      immagini: ramenInBrodo,
    },
    {
      id: 5,
      nome: "Ramen Saltato",
      description: "verdure, gamberi, sesamo e uovo",
      prezzo: 8.5,
      immagini: ramenSaltato,
    },
    {
      id: 6,
      nome: "Yaki Soba",
      description:
        "Ingredienti: Spaghetti soba, salmone cotto, verdure miste, uovo, salsa soba e sesamo",
      prezzo: 8.5,
      immagini: yakiSoba,
    },
    {
      id: 7,
      nome: "Udon con gamberi",
      description:
        "Ingredienti: Spaghetti Udon, gamberi, uovo, verdure miste, salsa udon e sesamo",
      prezzo: 8.5,
      immagini: udonSaltati,
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

export default Primi;
