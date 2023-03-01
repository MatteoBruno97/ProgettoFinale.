import React from "react";
import Cards from "./Cards";

import barcaGrande from "./immagini/sushi/barcaGrande.jpg";
import barcaMedia from "./immagini/sushi/barcaMedia.jpg";
import nigiriMaguro from "./immagini/sushi/nigiriMaguro.jpg";
import nigiriMisto from "./immagini/sushi/nigiriMisto.jpg";
import nigiriSake from "./immagini/sushi/nigiriSake.jpg";
import nigiriSuzuki from "./immagini/sushi/nigiriSuzuki.jpg";
import sashimiSake from "./immagini/sushi/sashimiSake.jpg";
import sashimiSukuzi from "./immagini/sushi/sashimiSuzuki.jpg";
import barcaPiccola from "./immagini/sushi/barcaPiccola.png";

const Sushi = () => {
  const state = [
    {
      id: 0,
      nome: "Nigiri Misto",
      description: "Nigiri Misto 8 pezzi",
      prezzo: 10.0,
      immagini: nigiriMisto,
    },
    {
      id: 1,
      nome: "Nigiri Maguro",
      description: "Pallina di riso con pesce (Tonno), 2 pezzi",
      prezzo: 4.0,
      immagini: nigiriMaguro,
    },
    {
      id: 2,
      nome: "Nigiri Sake",
      description: "Pallina di riso con pesce (Salmone), 2 pezzi",
      prezzo: 4.0,
      immagini: nigiriSake,
    },
    {
      id: 3,
      nome: "Nigiri Suzuki",
      description: "Pallina di riso con pesce (Branzino), 2 pezzi",
      prezzo: 4.0,
      immagini: nigiriSuzuki,
    },
    {
      id: 4,
      nome: "Sashimi Sake ",
      description: "Sashimi Sake salmone,  6 pezzi",
      prezzo: 7.0,
      immagini: sashimiSake,
    },
    {
      id: 5,
      nome: "Sashimi Suzuki",
      description: "Sashimi Suzuki branzino,  6 pezzi",
      prezzo: 7.0,
      immagini: sashimiSukuzi,
    },
    {
      id: 6,
      nome: "Barca Grande",
      description:
        "12 uramaki, 12 hosomaki, 15 nigiri, 4 gunkan, 1 temaki e 25 sashimi misto",
      prezzo: 58.0,
      immagini: barcaGrande,
    },
    {
      id: 7,
      nome: "Barca Media",
      description: "8 uramaki, 8 hosomaki, 10 nigiri, 2 gunkan e 18 sashimi",
      prezzo: 40.0,
      immagini: barcaMedia,
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

export default Sushi;
