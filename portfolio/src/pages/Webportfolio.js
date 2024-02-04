
import '../App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomNav from '../complements/portfolio/visual/CustomNav.js';


import { React, useState } from 'react';
import CustomProfile from '../complements/portfolio/visual/CustomProfile.js';
import CustomAboutMe from '../complements/portfolio/visual/CustomAboutMe.js';


function Webportfolio() {

  const [filter, setfilter] = useState('');
  
  const [portfolioBody, setPortfolioBody] = useState('profile');

  const getStringFilter = (txt_filter)=> (setfilter(txt_filter));

  const getPortfolioBody = (txtBodyPorfolioComponent) =>(setPortfolioBody(txtBodyPorfolioComponent));

  const portfolioDirected = () => {  
    if (portfolioBody === 'profile') {
      return <CustomProfile filter={filter} />;
    } else if (portfolioBody === 'About me') {
      return <CustomAboutMe />;
    } else {
      return null;
    }
  };
  
  return (
    <div className="App">

      <header className='App-header'>
        <CustomNav handleInputChang={getStringFilter} handlePortfolioBodyChang={getPortfolioBody}  ></CustomNav>
      </header>
      <div className='w-100 h-100'>
      {portfolioDirected()}
      </div>

     </div>
  );
}

export default Webportfolio;



