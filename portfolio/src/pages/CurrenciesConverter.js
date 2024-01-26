import {React,useEffect} from 'react'
import MConverter from '../complements/CurrenciesConverter/visual/MConverter'

const CurrenciesConverter = () => {

    useEffect(() => {
    const setFavicon = () => {
    const link = document.querySelector("link[rel~='icon']");
    if (link !== null) {
        link.href = './CurrenciConverter.ico';
        document.title ="CurrenciesConverter"
      }
    };
    setFavicon();    
  }, []);


  return (
    <div className='d-flex flex-column align-items-center justify-content-start custompagemoneyconverter'>
        
        <h1 className='customh1moneyconverter'>
        Currencies Converter
        </h1>
        
        <MConverter />
    </div>
        
      
  )
}

export default CurrenciesConverter
