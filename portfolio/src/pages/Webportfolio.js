
import '../App.css';
import { CardsTable } from '../complements/portfolio/logical/CardsTable.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomNav from '../complements/portfolio/visual/CustomNav';
import CustomContacts from '../complements/portfolio/logical/CustomContacts';

import { React, useState } from 'react';
import CustomContactEmail from '../complements/portfolio/visual/CustomContactEmail.js';

import {cardsData, contacts_obj} from '../complements/portfolio/Data/PortFolioData.js'

import CustomBottomBox from '../complements/portfolio/visual/CustomBottomBox.js';


const my_email = "ignacio.rodriguez.sistemas@gmail.com";

function Webportfolio() {

  const [filter, setfilter] = useState('');

  const getStringFilter = (txt_filter)=> (setfilter(txt_filter));

  
  
  return (
    <div className="App">

      <header className='App-header'>
        <CustomNav handleInputChang={getStringFilter} ></CustomNav>
      </header>

      <div className="App-body">

        <div className='d-flex justify-content-between align-items-center App-about-me'>
          <span className='w-10 me-4'>
        <img src="./PerfilePicture.png" className="img-fluid rounded-circle" alt="..."></img>
          </span>
          <div className='App-content-glass ms-4' id='App-Contact'>
        <p className='p-4'>Hello word</p>
          </div>    
        </div>

        <div className='App-Contact'>
          <div>
            <h5>Contact</h5>
          </div>
          <div className='App-Contactos-flex'>
            <div className='App-content-glass'>
              <CustomContacts contacts_obj={contacts_obj} />
            </div>
            <div className='App-content-glass ms-3'>
              <CustomContactEmail my_email={my_email} />
            </div>
            <div className='App-content-glass ms-2'>
              <CustomBottomBox textToCopy={my_email} />
            </div>
          </div>
        </div>

        <div className='App-body-title-div' id='App-Projects'>
          <span className='App-body-title-span'>
            <h5>My Projects</h5>
          </span>
        </div>
        <div className="App-SubBG scroll-both">
          <CardsTable card_filter={filter} cardsData={cardsData}></CardsTable>
        </div>

        


       
      </div>
    </div>
  );
}

export default Webportfolio;



