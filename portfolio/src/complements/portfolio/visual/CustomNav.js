import {React, useState} from 'react'

const CustomNav = ({handleInputChang}) => {

  const [valorInput, setValorInput] = useState('');

  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

  function handleClick(e){
    e.preventDefault();
    handleInputChang(valorInput);
  } 



  return (
    
      <nav className="navbar navbar-expand-lg bg-body-dark">
      <div className="container-fluid">
        <a className="navbar-brand link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active link-light" aria-current="page" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Contact</a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2"  onChange={handleInputChange} type="search" placeholder="Search" aria-label="Search" id='inSearch' />
            <button onClick={handleClick} className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
  )
}
export default CustomNav
