import React from 'react'

const CustomNav = () => {
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
              <a className="nav-link link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Link</a>
            </li>
            <li className="nav-item dropdown link-light">
              <a className="nav-link dropdown-toggle link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Action</a></li>
                <li><a className="dropdown-item link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item link-light" href="https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled link-light    " href='https://chat.openai.com/c/8bc467f7-0c11-4f04-b6d0-6d07113ddded' aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='inSearch' />
            <button onClick={handleClick} className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
  )
}

function handleClick ()
{
  alert("hola mundo");
}




export default CustomNav
