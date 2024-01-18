import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomTecnologies from './CustomTecnologies';

export const CustomCard = ({title, body, img, tecnologies, direction_card}) => {

  return (
    
      <div className="card custom-card" >
      <img src={img} className="card-img-top" alt="..."></img>
      <div className="card-body">  
          <h5 className="card-title">{title}</h5>
          <p className="card-text custom-card-p">{body}</p>
          <a href={direction_card} className="btn btn-primary">Mas información</a>
          <div>
          <CustomTecnologies tecnologies={tecnologies}></CustomTecnologies>
          </div>

        </div>
      </div>
    
  );
};

//
