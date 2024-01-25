import React from 'react'


const CustomTecnologies = ({tecnologies}) => {

    let img_tecnologies=[]

  if(tecnologies){
    img_tecnologies = tecnologies.map((e, id)=>(
    <span key={id} className="m-1">
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
