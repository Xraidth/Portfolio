
//Uso https://app.exchangerate-api.com/dashboard
import {React, useState} from 'react'
import CurrenciesOptions from '../logical/CurrenciesOptions.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const MConverter = () => {
 
  const [txtFrom, setTxtfrom] = useState(1);
  const [txtTo, setTxtTo] = useState('');
  const [selectedFrom, setSelectedFrom] = useState(1);
  const [selectedTo, setSelectedTo] = useState(1);

  function handClick(e){
    e.preventDefault();
    const resultTo = (txtFrom * selectedTo) / selectedFrom;
    setTxtTo(resultTo);
    const resultFrom = (resultTo * selectedFrom) / selectedTo;
    setTxtfrom(resultFrom);
  }

  function handFromSelected(e)
  {
    setTxtfrom(e.target.value);
    
  }
  function handToSelected(e)
  {
    setTxtTo(e.target.value);
    
  }

  const selectedFromFunc = (target)=>{
    setSelectedFrom(target);
  }
    
  const selectedToFunc = (target)=>{
  setSelectedTo(target);
  }
  

  return (
    <div className='CustomConvert'> 
      
      <form>    
          <div  className="d-flex align-items-center justify-content-start">
          
            <div className='d-flex flex-column m-3'>
            <label htmlFor="txtFrom" className='text-light'>From</label>
            <CurrenciesOptions name={"sltFrom"} funct_selec={selectedFromFunc} /> 
            <input type="text" id="txtFrom" name='txtFrom' onChange={handFromSelected} value={txtFrom} className='form-control mt-1'/>
            </div>

            <div className='d-flex flex-column m-3'>
            <label htmlFor="txtTo" className='text-light'>To</label>
            <CurrenciesOptions name={"sltTo"} funct_selec={selectedToFunc} />
            <input type="text" id="txtTo" name='txtTo' onChange={handToSelected} value={txtTo} className='form-control mt-1'/>
            </div>          
            <span>
            <button className='btn btn-primary' onClick={handClick}>Convert</button>
            </span>
          </div>
          </form>  
    </div>
    

    
  )
}

export default MConverter


