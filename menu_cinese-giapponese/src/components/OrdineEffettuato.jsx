import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OrdineEffettuato = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card" style={{marginTop:'200px'}}>
        <div className="card-body">
          Il tuo ordine è stato inviato in cucina, un cameriere ti porterà i tuoi piatti a breve!
          BUON APPETITO :)
        </div>
      </div>
    </div>
  );
};

export default OrdineEffettuato;

