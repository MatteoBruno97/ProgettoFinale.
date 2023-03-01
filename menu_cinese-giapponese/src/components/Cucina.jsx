import React, { useState, useEffect } from 'react';

function Cucina() {
  const [ordini, setOrdini] = useState([]);

 useEffect(() => {
  fetch(`http://localhost:8080/api/ordini/all?timestamp=${new Date().getTime()}`, { crossOrigin: true })
    .then(response => response.json())
    .then(data => setOrdini(data));
}, []);


  const remove = (id) => {
    fetch(`http://localhost:8080/api/ordini/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(response => response.json())
      .then(() => {
        // Aggiorna l'elenco degli ordini dopo aver eliminato l'ordine
        const filteredOrdini = ordini.filter(ordine => ordine.id !== id);
        setOrdini(filteredOrdini);
      });
  };

  return (
    <div>
      {ordini.map((ordine, i) => (
        <div className="card" key={i} style={{ top: "55px" }}>
          <div className="card-body text-dark position-relative">
            {ordine.nomePiatto}, {ordine.prezzo}, {new Date(ordine.oraOrdine).toLocaleTimeString()}
            <button
              id="remove"
              className="btn btn-sm btn-outline-danger"
              style={{ height: "30px", width: "100px", marginLeft: "10px" }}
              onClick={() => remove(ordine.id)}
            >
              remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cucina;
