

// import './App.css';
// import { CardsTable } from './complements/logical/CardsTable';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import CustomNav from './complements/visual/CustomNav';
// import CustomContacts from './complements/logical/CustomContacts';

// import { useState } from 'react';


// function App() {

//   const [filter, setfilter] = useState('');

//   const getStringFilter = (txt_filter)=> (setfilter(txt_filter));
  
//   return (
//     <div className="App">

//       <header className='App-header'>
//         <CustomNav handleInputChang ={getStringFilter} ></CustomNav>
//       </header>

//       <div className="App-body">
//         <div className='App-body-title-div'>
//             <span className='App-body-title-span'>
//             <h5>My Proyects</h5>
//             </span>
//         </div>
//         <div className="App-SubBG scroll-both">
//         <CardsTable card_filter={filter}></CardsTable>
//         </div>

//         <div className='App-footer'>
//           <div className='App-Contactos'>
//             <CustomContacts></CustomContacts>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes
//  ,Link
 } from 'react-router-dom';
import Webportfolio from './pages/Webportfolio';
import CurrenciesConverter from './pages/CurrenciesConverter.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PasswordGenerator from './pages/PasswordGenerator.js';
import MyBlog from './pages/MyBlog.js';
import Ecommerce from './pages/Ecommerce.js';


const Home = <Webportfolio />;
const MoneyConverter = <CurrenciesConverter />
const PasswordG = <PasswordGenerator />
const MyBlogApp = <MyBlog />
const ecommerce =<Ecommerce/>


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={Home} />
        <Route path="/CurrenciesConverter" element={MoneyConverter} />
        <Route path="/PasswordGenerator" element={PasswordG} />
        <Route path="/MyBlog" element={MyBlogApp} />
        <Route path="/Ecommerce" element={ecommerce} />
      </Routes>
    </Router>
  );
};

export default App;
