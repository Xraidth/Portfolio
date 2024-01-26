
//Uso https://app.exchangerate-api.com/dashboard
import React from 'react'
import CurrenciesOptions from '../logical/CurrenciesOptions.js'

const MConverter = () => {
  return (
    <div>
      <form>    
          <div>
          
            <div>
            <label htmlFor="txtFrom">From</label>
            <input type="text" id="txtFrom" name='txtFrom'/>
            

            
                
            <CurrenciesOptions name={"sltFrom"} />    
            

            </div>

            <div>
            <label htmlFor="txtTo">To</label>
            <input type="text" id="txtTo" name='txtTo'/>
            
            <CurrenciesOptions name={"sltTo"} />

            </div>

            <span>
              <p>Resultado</p>
            </span>
          
          </div>
          </form>  
    </div>
    

    
  )
}

export default MConverter
