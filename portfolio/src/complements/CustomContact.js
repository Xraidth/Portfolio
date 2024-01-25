import React from 'react';

const CustomContact = ({contacts}) => {
    let img_contacts=[];

    if(contacts){
        img_contacts = contacts.map(function(e, id)
        {    
        if(e['url_contact']){
        return(
        <span key={id} className="m-1">
        <a href={e['url_contact']} >
        <img src={e['url_img']} className="img-fluid icono" alt={e['name']} title ={e['name'] }></img>
        </a>
        </span>
        );
        }
        else{
        return(
            <span key={id} className="m-1">
        <img src={e['url_img']} className="img-fluid icono" alt={e['name']} title ={e['name'] }></img>
        </span>);
        }    
        }
        
        );
    }


  return (
    <div>
      {img_contacts}
    </div>
  )
}

export default CustomContact;












