
import React, { useState, useEffect } from 'react'


   


const Cronomrtro = () => {
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (activo) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    // Limpieza cuando cambia `activo` o el componente se desmonta
    return () => clearInterval(intervalo);
  }, [activo]);

  const formatearTiempo = (segundos) => {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };


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
      <p>Tiempo: {formatearTiempo(tiempo)}</p>
      <h1> {tiempo} {tiempo > 10 && '🎉'}</h1>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={detener}>Detener</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default Cronomrtro

