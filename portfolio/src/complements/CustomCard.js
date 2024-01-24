import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomTecnologies from './CustomTecnologies';

export const CustomCard = ({title, body, img, tecnologies, direction_card}) => {

  return (
    <a href={direction_card} className="custom-card-link">
      <div className="card custom-card" >
      <div className='custom-max-height'>
      <img src={img} className="card-img-top" alt="..."></img>
      </div>
      <div className="card-body">  
          <h5 className="card-title">{title}</h5>
          <p className="card-text custom-card-p">{body}</p>
          <div className='mt-3'>
          <CustomTecnologies tecnologies={tecnologies}></CustomTecnologies>
          </div>
          
        </div>
      </div>
    </a>
    
  );
};

//<a href={direction_card}>Mas información</a>
