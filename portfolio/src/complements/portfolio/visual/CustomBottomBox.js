
import {React, useState} from 'react'

const CustomBottomBox = ({textToCopy}) => {
  const [clipBo, setCliBo] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCliBo(true);

      setTimeout(() => {
        setCliBo(false);
      }, 3000);


    } catch (error) {
      console.error('Error when writting clipboard:', error);
      setCliBo(false);
    }
  };



  return (
      <div>
        <button className="btn" onClick={handleCopyClick} >
          <span>
              <img src='../../../../../ButtonCopiar.png' className="img-fluid mini-icono" alt="Copy" title="Copy" ></img>
              <p className={`text-light position-absolute bottom-50 start-0 ${clipBo ? "d-block":"d-none"}`} >Copied</p>
          </span>
        </button>

        <a className="btn" href={`mailto:${textToCopy}`}>
          <span>
              <img src='../../../../../ButtonEnviar.png' className="img-fluid mini-icono" alt="Send Email" title="Send Email"></img>
          </span>
        </a>
      </div>
     
  )
}

export default CustomBottomBox
