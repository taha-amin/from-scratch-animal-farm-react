import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import AnimalList from './AnimalList/AnimalList';

function App() {
  return (
    <div className="App">
      <Header name="Mohamed"/>

      <AnimalList animals={animal} />

      <Footer year="2022"/>
    </div>
  );
}

export default App;