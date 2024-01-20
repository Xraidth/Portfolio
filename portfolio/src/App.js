

import './App.css';
import { CardsTable } from './complements/CardsTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




function App() {
  
  return (
    <div className="App">

      <header className='App-header'>
        <h1 className='header__h1'>Mis Proyectos</h1>
      </header>

      <body className="App-body">
        <div className="App-SubBG scroll-both">
        <CardsTable></CardsTable>
        </div>
        <div className='App-Contactos'></div>
      </body>
    </div>
  );
}

export default App;
