import React from 'react'
import { CustomCard } from './CustomCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

let cardsData = [{
  title: "Aprendizaje online",
  body: "Sumérgete en el fascinante mundo del aprendizaje online.",
  img: ""
}];

export const CustomRows = () => {

  const cards = cardsData.map((c, index)=> 
  <tr key={index}>
  <CustomCard title= {c.title} body= {c.body} img = {c.img} />
  </tr>
  );

  return (
    <tbody>
      {cards}
    </tbody>
  );
};
