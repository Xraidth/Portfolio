import {React, useEffect} from 'react'

const Ecommerce = () => {
    useEffect(() => {
        const setFavicon = () => {
        const link = document.querySelector("link[rel~='icon']");
        if (link !== null) {
            link.href = '../../Ecommerce.ico'
            document.title ="Ecommerce"
          }
          
        };
        setFavicon();    
      }, []);


  return (
      <div className='ecommerce-all'>
        <div className='ecommerce-header'>
        <div className='ecommerce-nav'>
            

        <div className='ecommerce-title'>
                  <h5>Ecommerce</h5>
                  <div className='d-flex flex-column justify-content-start align-items-start h-100 w-100 '>
                    <div className='ecommerce-title-div'>
                    <p>Sent to</p>
                    </div>
                    <div className='ecommerce-title-div'>
                    <b>Rosario</b>
                    </div>
                  </div>
        </div>
         <div className='ecommerce-nav-search'>
                  <div className='w-100 d-flex flex-row align-items-center justify-content-center'>
                      <input className='ecommerce-input-search' placeholder="Buscar productos, marcas y más…" />
                      <button className='ecommerce-button-search'>
                          <img src="https://cdn-icons-png.flaticon.com/512/2618/2618254.png " width="30" height="30" alt="" title="search" className="m-0 p-0 ecommerce-magnifying-glass" />
                      </button>
                  </div>

                  <div className='ecommerce-option-nav'>
                      <ul className='ecommerce-option-nav-ul'>
                          <li className='ecommerce-option-nav-li'>
                              Categorías
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Ofertas
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Historial
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Supermercado
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Mode
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Mercado play
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Vender
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Ayuda
                          </li>
                      </ul>
                  </div>
              
        </div>
         <div className='ecommerce-nav-profile'>
         <div className='ecommerce-option-nav-profile'>
                  <ul className='ecommerce-option-nav-profile-ul'>
                      <li  className='ecommerce-option-nav-li'>
                          Creá tu cuenta
                      </li>
                      <li  className='ecommerce-option-nav-li'>
                          Ingresá
                      </li>
                      <li  className='ecommerce-option-nav-li'>
                          Mis compras
                      </li>
                  </ul>
                </div>
         </div>

        </div>


        </div>

      </div>
  )
}

export default Ecommerce

/*

<div className='ecommerce-header'>
        
        <div className='ecommerce-nav'>
        <div className='ecommerce-title'>
                  <h5>Ecommerce</h5>
                  <div className='d-flex flex-column justify-content-start align-items-start '>
                    <div className='ecommerce-title-div'>
                    <p>Sent to</p>
                    </div>
                    <div className='ecommerce-title-div'>
                    <b>Rosario</b>
                    </div>
                  </div>
        </div>
         <div className='ecommerce-nav-search'>
                  <div className='w-100 d-flex flex-row align-items-center justify-content-center'>
                      <input className='ecommerce-input-search' placeholder="Buscar productos, marcas y más…" />
                      <button className='ecommerce-button-search'>
                          <img src="https://cdn-icons-png.flaticon.com/512/2618/2618254.png " width="30" height="30" alt="" title="search" className="m-0 p-0 ecommerce-magnifying-glass" />
                      </button>
                  </div>

                  <div className='ecommerce-option-nav'>
                      <ul className='ecommerce-option-nav-ul'>
                          <li className='ecommerce-option-nav-li'>
                              Categorías
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Ofertas
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Historial
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Supermercado
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Mode
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Mercado play
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Vender
                          </li>
                          <li className='ecommerce-option-nav-li'>
                              Ayuda
                          </li>
                      </ul>
                  </div>
              
        </div>
         <div className='ecommerce-nav-profile'>
         <div className='ecommerce-option-nav-profile'>
                  <ul className='ecommerce-option-nav-profile-ul'>
                      <li  className='ecommerce-option-nav-li'>
                          Creá tu cuenta
                      </li>
                      <li  className='ecommerce-option-nav-li'>
                          Ingresá
                      </li>
                      <li  className='ecommerce-option-nav-li'>
                          Mis compras
                      </li>
                  </ul>
                </div>
         </div>
        </div>


        </div>




          <div className='ecommerce-body'> 
          
                    <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>          
          </div>
          <div className='ecommerce-footer'>

            <ul className='ecommerce-option-footer'>
              <li className='ecommerce-option-footer-li'>
                  Trabaja con nosotros
              </li>
              <li className='ecommerce-option-footer-li'>
                  Terminos y condiciones
              </li>
              <li className='ecommerce-option-footer-li'>
                  Como cuidamos tu privacidad
              </li>
              <li className='ecommerce-option-footer-li'>
                  Accesibilidad
              </li>
              <li className='ecommerce-option-footer-li'>
                  Informacion al usuario financiero
              </li>
              <li className='ecommerce-option-footer-li'>
                  Ayuda
              </li>
              <li className='ecommerce-option-footer-li'>
                  Defensa del Consumidor
              </li>
              <li className='ecommerce-option-footer-li'>
                  Información sobre seguros
              </li>
            </ul>
           
          </div>
*/