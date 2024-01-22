import React from 'react'
import CustomTecnologies from './CustomTecnologies'

const CustomContacts = () => {

    const contacts_img = [
        'https://cdn-icons-png.flaticon.com/512/145/145802.png',
        'https://cdn-icons-png.flaticon.com/512/5969/5969020.png' ,
        'https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcTW8Eht4ooW3CRBzkms3c5X_Ec50J2XvH7cnm-htH2yfaiyjEn_ry_v41pvoPdfAhwDKkAxoTmRtQ93wrX-B672Q444vz8AN-2BlSUnWg_J',
        'https://cdn-icons-png.flaticon.com/512/3955/3955024.png', 
        'https://cdn-icons-png.flaticon.com/512/4494/4494494.png',
        'https://cdn-icons-png.flaticon.com/512/4494/4494485.png',
        'https://cdn-icons-png.flaticon.com/512/2504/2504942.png'
    ]
   
   

  return (
    <div>
    <CustomTecnologies tecnologies={contacts_img}></CustomTecnologies>
    </div>
  )
}

export default CustomContacts
