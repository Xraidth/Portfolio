import React from 'react'
import { CustomCard } from './CustomCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




export const CustomRows = () => {
  
  const cardsData = [
    {
      title: "Website UTNFRRO",
      body: "Sumérgete en el fascinante mundo del aprendizaje online.",
      img: './student1.png'
    }
  ];
  

  const cards = cardsData.map((c, index)=> (
  <td key={index}>
  <CustomCard title= {c.title} body= {c.body} img = {c.img} />
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
