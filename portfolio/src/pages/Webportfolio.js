
import '../App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomNav from '../complements/portfolio/visual/CustomNav.js';


import { React, useState } from 'react';
import CustomProfile from '../complements/portfolio/visual/CustomProfile.js';
import CustomAboutMe from '../complements/portfolio/visual/CustomAboutMe.js';


import CustomProjects from '../complements/portfolio/visual/CustomProjects.js';
function Webportfolio() {

  const [filter, setfilter] = useState('');
  
  const [portfolioBody, setPortfolioBody] = useState('profile');

  const getStringFilter = (txt_filter)=> (setfilter(txt_filter));

  const getPortfolioBody = (txtBodyPorfolioComponent) =>(setPortfolioBody(txtBodyPorfolioComponent));


  const portfolioDirected = () => {  
    if (portfolioBody === 'profile') {
      return (<CustomProfile/>);
    } else if (portfolioBody === 'About me') {
      return (
      <div className='m-100 h-100 mt-20 App-div-about-me'> 
      <CustomAboutMe />
      </div>
      );
    } 
    else if(portfolioBody==='Projects'){
      return(
        <div className='m-100 h-100 mt-20'> 
         <CustomProjects filter={filter}/>
         </div>
    );    
    }else {
      return null;
    }
  };
  
  return (
    <div className="App">

      <header className='App-header'>
        <CustomNav handleInputChang={getStringFilter} handlePortfolioBodyChang={getPortfolioBody} portfolioBody={portfolioBody}  ></CustomNav>
      </header>
      <div className='w-100 h-100'>
      {portfolioDirected()}
      </div>

     </div>
  );
}

export default Webportfolio;



