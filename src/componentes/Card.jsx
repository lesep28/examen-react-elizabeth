import React from 'react'

const Card = ({nombre,superFavorito}) => {
  return (
    <div>
      <h4>Hola, {nombre}!</h4>
    <p>sabemos que tu super favorito es:</p>
    <h3>{superFavorito}</h3>
    
    </div>
    
)}

export default Card