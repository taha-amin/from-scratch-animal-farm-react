import React from 'react';
import Animal from '../Animal/Animal.js';
import './AnimalList.css';

export default function AnimalList({ animal }) {
  return (
    <main>
      {animal.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says}
          top={animal.top}
          left={animal.left} />
      ))}
    </main>
  );
}