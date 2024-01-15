
import './App.css';
import { CardsTable } from './complements/CardsTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-SubBG scroll-both">
        <CardsTable></CardsTable>
        </div>
      </header>
    </div>
  );
}

export default App;
