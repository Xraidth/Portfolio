
import '../App.css';
import { CardsTable } from '../complements/portfolio/logical/CardsTable.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomNav from '../complements/portfolio/visual/CustomNav';
import CustomContacts from '../complements/portfolio/logical/CustomContacts';

import { React, useState } from 'react';



function Webportfolio() {

  const [filter, setfilter] = useState('');

  const getStringFilter = (txt_filter)=> (setfilter(txt_filter));
  
  return (
    <div className="App">

      <header className='App-header'>
        <CustomNav handleInputChang ={getStringFilter} ></CustomNav>
      </header>

      <div className="App-body">
        <div className='App-body-title-div'>
            <span className='App-body-title-span'>
            <h5>My Proyects</h5>
            </span>
        </div>
        <div className="App-SubBG scroll-both">
        <CardsTable card_filter={filter}></CardsTable>
        </div>

        <div className='App-footer'>
          <div className='App-Contactos'>
            <CustomContacts></CustomContacts>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webportfolio;



