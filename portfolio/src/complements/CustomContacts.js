import React from 'react'
import CustomContact from './CustomContact.js'


const CustomContacts = () => {

    const contacts_obj = [
        {
         name: "Facebook",
         url_img: 'https://cdn-icons-png.flaticon.com/512/145/145802.png',
         url_contact:""
        },
        {
          name: "X",
          url_img: 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png',
          url_contact:""
         },
         {
          name: "Discord",
          url_img: 'https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcTW8Eht4ooW3CRBzkms3c5X_Ec50J2XvH7cnm-htH2yfaiyjEn_ry_v41pvoPdfAhwDKkAxoTmRtQ93wrX-B672Q444vz8AN-2BlSUnWg_J',
          url_contact:""
         },
         {
          name: "Instagram",
          url_img: 'https://cdn-icons-png.flaticon.com/512/3955/3955024.png',
          url_contact:'https://www.instagram.com/ignacio_r05/'
         },
         {
          name: "Whatsapp",
          url_img: 'https://cdn-icons-png.flaticon.com/512/4494/4494494.png',
          url_contact:""
         },
         {
          name: "YouTube",
          url_img: 'https://cdn-icons-png.flaticon.com/512/4494/4494485.png',
          url_contact:""
         },
         {
          name: "TikTok",
          url_img: 'https://cdn-icons-png.flaticon.com/512/2504/2504942.png',
          url_contact:""
         }
    ]
   
   

  return (
    <div>
    <CustomContact contacts = {contacts_obj} ></CustomContact>
    </div>
  )
}

export default CustomContacts
