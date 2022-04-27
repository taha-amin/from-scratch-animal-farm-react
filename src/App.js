import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header name="Mohamed"/>

      <Main test/>

      <Footer year="2022"/>
    </div>
  );
}

export default App;