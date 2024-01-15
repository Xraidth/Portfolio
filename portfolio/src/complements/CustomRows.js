import React from 'react'
import { CustomCard } from './CustomCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




export const CustomRows = () => {
  
  const cardsData = [
    {
      title: "Aprendizaje online",
      body: "Sumérgete en el fascinante mundo del aprendizaje online.",
      img: '../../public/student1.jpg'
    },
    {
      title: "Exploración Espacial",
      body: "Descubre los misterios del espacio y las estrellas.",
      img: ''
    },
    {
      title: "Cocina Creativa",
      body: "Aprende a preparar deliciosos platillos con ingredientes innovadores.",
      img: ''
    },
    {
      title: "Aventuras Literarias",
      body: "Viaja a mundos imaginarios a través de la lectura de libros fascinantes.",
      img: ''
    },
    {
      title: "Viaje en Bicicleta",
      body: "Explora nuevos lugares y mantente activo con emocionantes rutas en bicicleta.",
      img: ''
    },
    {
      title: "Fotografía Creativa",
      body: "Captura momentos especiales y desarrolla tus habilidades en fotografía.",
      img: ''
    },
    {
      title: "Yoga y Meditación",
      body: "Encuentra paz interior y mejora tu bienestar con prácticas de yoga y meditación.",
      img: ''
    },
    {
      title: "Arte Abstracto",
      body: "Expresa tu creatividad a través de formas y colores en el arte abstracto.",
      img: ''
    },
    {
      title: "Aprendizaje de Idiomas",
      body: "Domina nuevos idiomas y amplía tus horizontes culturales.",
      img: ''
    },
    {
      title: "Ecoturismo",
      body: "Descubre la belleza de la naturaleza y contribuye a la conservación del medio ambiente.",
      img: ''
    }
  ];
  

  const cards = cardsData.map((c, index)=> (
  <td key={index}>
  <CustomCard title= {c.title} body= {c.body} img = {'../../public/student1.jpg'} />
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
