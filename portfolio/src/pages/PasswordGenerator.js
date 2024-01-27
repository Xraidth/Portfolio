import {React,useEffect} from 'react'
import PGenerator from '../complements/PasswordGenerator/visual/PGenerator.js'

const PasswordGenerator = () => {

    useEffect(() => {
    const setFavicon = () => {
    const link = document.querySelector("link[rel~='icon']");
    if (link !== null) {
        link.href = './PasswordGenerator.ico';
        document.title ="CurrenciesConverter"
      }
    };
    setFavicon();    
  }, []);


  return (
    <div className='d-flex flex-column align-items-center justify-content-start custompagemoneyconverter'>
        
        <h1 className='customh1moneyconverter'>
        Password Generator
        </h1>
        
        <PGenerator />
    </div>
        
      
  )
}

export default PasswordGenerator
