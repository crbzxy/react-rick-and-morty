import React from 'react'

function Character({ character }) {
  return (
    <div className='text-left mb-5' >
      <h2>{character.name}</h2>
      <img className='img-fluid rounded' src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Specie: {character.species}</p>
      <p>Type: {character.type}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Name: {character.location.name}</p>
    </div>
  )
}
 
export default Character