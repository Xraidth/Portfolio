import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const CustomTecnologies = ({tecnologies}) => {

    let img_tecnologies=[]

  if(tecnologies){
    img_tecnologies = tecnologies.map((e)=>(
    <span class="">
    <img src={e} className="img-fluid icono" alt="..."></img>
    </span>

    ));

  }
  return (
    <div>
      {img_tecnologies}
    </div>
  )
}

export default CustomTecnologies
