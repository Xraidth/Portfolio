import React from 'react';

const CustomContact = ({contacts}) => {
    let img_contacts=[];

    if(contacts){
        img_contacts = contacts.map(function(e, id)
        {    
        if(e['url_contact']){
        return(
        
        <span key={id} className="m-2">
        <a  className="text-decoration-none" href={e['url_contact']} >
              
                <span className=''>
                  <img src={e['url_img']} className="img-fluid icono" alt={e['name']} title={e['name']}></img>
                  <p className='text-light text-xs'>{e['name']}</p>
                </span>

              
        </a>
        </span>
        
        );
        }
        else{
        return null /*(<span key={id} className="m-1">          <img src={e['url_img']} className="img-fluid icono" alt={e['name']} title ={e['name'] }></img>         </span>)*/
        ;}    
        }
        
        );
    }


  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
      {img_contacts}
    </div>
  )
}

export default CustomContact;












