import React from 'react';
import Animal from '../Animal/Animal.js';
import backgroundImg from '../background.png';
import './AnimalList.css';

export default function AnimalList({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says} />
                    // top={animal.top}
                    // left={animal.left} 
      ))}
    </main>
  );
}