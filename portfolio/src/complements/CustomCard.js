import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export const CustomCard = ({title, body, img}) => {


    

  return (
    <td>
      <div className="card" style={{ width: '18rem'}}>
      <img src={img} className="card-img-top" alt="..."></img>
      <div className="card-body">  
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          
        </div>
      </div>
      </td>
  );
};
//<a href="" className="btn btn-primary">Mas información</a>

//