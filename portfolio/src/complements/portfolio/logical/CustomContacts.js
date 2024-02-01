import React from 'react'
import CustomContact from '../visual/CustomContact.js'


const CustomContacts = ({contacts_obj}) => {


   
   

  return (
    <div className='w-100 h-100'>
    <CustomContact contacts = {contacts_obj} ></CustomContact>
    </div>
  )
}

export default CustomContacts
