import React from 'react'

const CustomContactEmail = ({my_email}) => {
  return (
    <div className='w-100 h-100 d-flex flex-row align-items-center ustify-content-center text-center '>
      <p className='custom-contact-email'>{my_email}</p>
    </div>
  )
}

export default CustomContactEmail
