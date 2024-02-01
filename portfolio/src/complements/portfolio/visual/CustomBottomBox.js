import React from 'react'

const CustomBottomBox = ({textToCopy}) => {

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (error) {
      console.error('Error when writting clipboard:', error);
    }
  };


  return (
      <div>
        <button className="btn">
          <span>
              <img src='../../../../../ButtonCopiar.png' className="img-fluid mini-icono" alt="Copy" title="Copy" onClick={handleCopyClick}></img>
          </span>
        </button>

        <button className="btn">
          <span>
              <img src='../../../../../ButtonEnviar.png' className="img-fluid mini-icono" alt="Send Email" title="Send Email"></img>
          </span>
        </button>
      </div>
     
  )
}

export default CustomBottomBox
