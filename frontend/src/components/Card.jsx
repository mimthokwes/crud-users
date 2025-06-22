import React from 'react';

function Card({ id, name, nim, email, phone }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border text-black border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>NIM:</strong> {nim}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default Card;
