

import './App.css';
import { CardsTable } from './complements/CardsTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomNav from './complements/CustomNav';




function App() {
  
  return (
    <div className="App">

      <header className='App-header'>
        <CustomNav></CustomNav>
      </header>

      <div className="App-body">
        <div className='App-body-title-div'>
            <span className=''>
            <h5>My Proyects</h5>
            </span>
        </div>
        <div className="App-SubBG scroll-both">
        <CardsTable></CardsTable>
        </div>

        <div className='App-footer'>
        <div className='App-Contactos'>

        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
