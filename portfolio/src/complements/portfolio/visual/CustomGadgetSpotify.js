import React from 'react'

const CustomGadgetSpotify = ({type, code}) => {
  return (
    <div className='h-100 w-100'>
    <iframe
      src={`https://open.spotify.com/embed?uri=spotify:${type}:${code}`}
      width="400px"
      height="80px"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="Mi Increíble Lista de Reproducción de Spotify"
      
    ></iframe>
  </div>
  )
}
//<CustomGadgetSpotify type='playlist' code='2Tt55BMgrEmNuIw3RjkvXF'/>
export default CustomGadgetSpotify
