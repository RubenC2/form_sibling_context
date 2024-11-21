import React from 'react';

const Card = ({ message }) => {
  return (
    <div className="card">
      <h1>CARD</h1>
      <p>Nombre: {message.name}</p>
      <p>Email: {message.email}</p>
      <p>Foto: <img src={message.img_url}/></p>
      <p>Edad: {message.age}</p>
    </div>
  );
};

export default Card;