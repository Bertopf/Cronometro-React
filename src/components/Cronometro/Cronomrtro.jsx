
import React, { useState } from 'react'

  



const Cronomrtro = () => {
  const [tiempo, setTiempo] = useState(0);
  const [Activo, setActivo] = useState(false);


  const iniciar = () => {
    setActivo(true);
  };

  const detener = () => {
    setActivo(false);
  };

  const reiniciar = () => {
    setTiempo(0);
    setActivo(false);
  };

  return (
    <div>
      <h2>Cronómetro</h2>
      <p>Tiempo: {tiempo} segundos</p>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={detener}>Detener</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default Cronomrtro

