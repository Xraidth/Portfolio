
import { CardsTable } from '../logical/CardsTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomContacts from '../logical/CustomContacts';
import { React } from 'react';
import CustomContactEmail from '../visual/CustomContactEmail.js';
import {cardsData, contacts_obj, my_email} from '../Data/PortFolioData.js'
import CustomBottomBox from '../visual/CustomBottomBox.js';


function CustomProfile({filter}) {
  return (
      <div className="App-body-porfolio">
  
        <div className='d-flex justify-content-between align-items-center App-profile-img'>
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
    
  );
}

export default CustomProfile;



