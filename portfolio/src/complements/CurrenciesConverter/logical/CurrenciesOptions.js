import {React, useEffect, useState} from 'react'

const CurrenciesOptions = ({name}) => {

    const [money_options, setMoney_options] = useState([]);
    
    const fetchData = async() =>
    {
        const apiKey = 'f2f10b7f94d10ffa4e5a8f47';
        const url = 'https://v6.exchangerate-api.com/v6/f2f10b7f94d10ffa4e5a8f47/latest/USD';
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${apiKey}`);
       
        const requestOptions = {
        method: 'GET', 
        headers: headers,
        };
        
        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            setMoney_options(data['conversion_rates']);
            
          } catch (error) {
            console.error('Error:', error);
          } 
        
        
    }


    useEffect(()=>{
        fetchData();
    },[]);



    const tags_options_money = Object.entries(money_options).map(element => (
        <option key={element[0]} value={element[1]}>
          {element[0]}
        </option>
      ));
    


  return (
    <select name={name} id={name}>
    {tags_options_money}
    </select>
  )
  
  
}

export default CurrenciesOptions

