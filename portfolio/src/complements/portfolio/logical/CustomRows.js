import {React,
  // useState
  } from 'react'
import { CustomCard } from '../visual/CustomCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




export const CustomRows = ({card_filter, cardsData}) => {
  
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
