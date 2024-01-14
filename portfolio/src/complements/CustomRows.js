import React from 'react'
import { CustomCard } from './CustomCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




export const CustomRows = () => {
  
const cardsData=[{
  title: "Aprendizaje online",
  body: "Sumérgete en el fascinante mundo del aprendizaje online.",
  img: '../../public/Imagenes/Cards/student1.jpg'
}];

  const cards = cardsData.map((c, index)=> {
    const celda = (<tr key={index}>
  <CustomCard title= {c.title} body= {c.body} img = {c.img} />
  </tr>);
  return celda
  });

  return (
    <tbody>
      {cards}
    </tbody>
  );
};
