import React from 'react';

export default function Card({ title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '250px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Записаться</button>
    </div>
  );
}
