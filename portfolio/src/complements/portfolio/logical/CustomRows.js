import {React,
  // useState
  } from 'react'
import { CustomCard } from '../visual/CustomCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




export const CustomRows = ({card_filter}) => {
  
  const cardsData = [
    {
      title: "UTNFRRO Website",
      body: "My first website",
      img: './student1.png',
      tecnologies:[
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
      ],
      direction_card: 'https://utnfrroproyecto2024.000webhostapp.com/'
    },
    {
      title: "TPI-Academia",
      body: "The Academic Management System",
      img: './academia1.png',
      tecnologies:[
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg',
        'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg'
      ],
      direction_card: 'https://github.com/fabriortenzi/TPI-Academia'
    },
    {
      title: "WebService",
      body: "User Management Web API Server",
      img: './nodejs.png',
      tecnologies:[
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
      ],
      direction_card: 'https://github.com/Xraidth/WebServer.git'
    }
  ];
  
  const filteredDatos = cardsData.filter((e)=> e.title.toLowerCase().includes(card_filter.toLocaleLowerCase()));
  const rows = sortCells(createcards(filteredDatos), CalculateTableSize(cardsData));

  return (
    <tbody>
      {rows}
    </tbody>
  );
};

function createcards(cardsData){
  const cards = cardsData.map((c, index)=> (
    <td key={index}>
    <CustomCard title= {c.title} body= {c.body} img = {c.img} tecnologies ={ c.tecnologies} direction_card={c.direction_card} />
    </td>
    ));
  return cards

}

function CalculateTableSize(cardsData){
  
  if(window.innerWidth < 767){
   return cardsData.length; 
  }
  else {return 3;}

}


function sortCells(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const rw = arr.slice(i, i + chunkSize)
    result.push(
    <tr key={i / chunkSize} className='custom-tr'>
      {rw}
    </tr>
    );
  }
  return result;
}
