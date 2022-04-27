import React from 'react';
import backgroundImg from '../background.png';
import { animals } from '../data.js';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animal={animals} />
    </main>
  );
}

// main style
// <AnimalList animal={animals} />