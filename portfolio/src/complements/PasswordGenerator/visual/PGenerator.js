import {React, useState
} from 'react'

import randomatic from 'randomatic';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const PGenerator = () => {
 
 const [password, setPassword] = useState('');
 const [txtLen, setTxtLen] = useState('');
 const [SCH, setSCH] = useState(false);
 const [Num, setNum] = useState(false);
 const [Maxus, setMaxus] = useState(false);

  function handClick(e){
    e.preventDefault();

    let restricSCH = '';
    let restricNum = '';
    let restricMaxus = '';
  
    (SCH === true) ? restricSCH = '!' : restricSCH='';
    (Num === true) ? restricNum = '0' : restricNum='';
    (Maxus === true) ? restricMaxus = 'A' : restricMaxus='';
    
    
    const restric = restricMaxus + 'a' + restricNum  + restricSCH; 



    const newPassword = randomatic(restric ,txtLen);    

    setPassword(newPassword);
  }

  function handletxtLen(e){
    setTxtLen(e.target.value);
  }

 function handlecbxSCH(e){
  setSCH(e.target.checked);
 }

 function handlecbxNum(e)
 {
setNum(e.target.checked);
 }

function handlecbxMaxus(e)
{
setMaxus(e.target.checked);
}


  return (
    <div className='bg-black'> 
      
      <form>    
          
          
            <div className="d-flex flex-column align-items-center justify-content-start">

            <div className='d-flex m-3 justify-content-center align-items-center'>
            <label htmlFor="txtLen" className='text-light m-1'>Length</label>
            <input type="number" min="0" id="txtLen" name='txtLen'  className='form-control m-3' style={{ width: '60px' }} onChange={handletxtLen}/>

            <span>
            <button className='btn btn-primary' onClick={handClick}>Generate</button>
            </span>

            </div>

            <div>
            <div>
            <input type="checkbox" id="cbxSCH" name="cbxSCH" onChange={handlecbxSCH}/>
            <label htmlFor="cbxSCH" className='text-light m-1'>Special characters</label>
            </div>

            <div>
            <input type="checkbox" id="cbxNum" name="cbxNum" onChange={handlecbxNum}/>
            <label htmlFor="cbxNum" className='text-light m-1'>Numbers</label>
            </div>

            <div>
            <input type="checkbox" id="cbxMaxus" name="cbxMaxus" onChange={handlecbxMaxus}/>
            <label htmlFor="cbxMaxus" className='text-light m-1'>Uppercase</label>
            </div>
            </div>
            <div className='d-flex flex-column m-4 align-items-center'>
            <label htmlFor="txtPass" className='text-light'>Password</label>
            <input type="text" id="txtPass" name='txtPass' value={password} readOnly className='form-control mt-2 text-center bg-black text-primary'/>
            </div>
            </div>

            
          
          </form>  
    </div>
    

    
  )
}

export default PGenerator