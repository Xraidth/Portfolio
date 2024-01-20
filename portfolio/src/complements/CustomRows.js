import React from 'react'
import { CustomCard } from './CustomCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




export const CustomRows = () => {
  
  const cardsData = [
    {
      title: "UTNFRRO Website",
      body: "Mi primer sito web",
      img: './student1.png',
      tecnologies:[
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
      ],
      direction_card: 'http://utnfrroproyecto2024v1.wuaze.com/?i=1'
    },
    {
      title: "TPI-Academia",
      body: "El Sistema de Gestión Académica",
      img: './academia1.png',
      tecnologies:[
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg'
      ],
      direction_card: 'https://github.com/fabriortenzi/TPI-Academia'
    }
    


   
  ];
  

  const cards = cardsData.map((c, index)=> (
  <td key={index}>
  <CustomCard title= {c.title} body= {c.body} img = {c.img} tecnologies ={ c.tecnologies} direction_card={c.direction_card} />
  </td>
  ));
  const rows = sortCells(cards, 3);

  return (
    <tbody>
      {rows}
    </tbody>
  );
};



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
