import React from 'react'

const Ecommerce = () => {
  return (
      <div className='h-100 w-100'>

          <div className='ecommerce-header'>

              <div>
                  <h5>mercado libre</h5>

                  <div>
                      <p>Enviar a
                          <h6>Capital Federal</h6>
                      </p>
                  </div>

              </div>

              <div className='d-flex flex-column align-items-center justify-content-evenly bg-primary h-100 w-40'>
                 
                  <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                      <input className='ecommerce-input-search'/>
                  </div>

                  <div className='ecommerce-option-nav'>
                      <ul className='ecommerce-option-nav-ul'>
                          <il>
                              Categorías
                          </il>
                          <il>
                              Ofertas
                          </il>
                          <il>
                              Historial
                          </il>
                          <il>
                              Supermercado
                          </il>
                          <il>
                              Mode
                          </il>
                          <il>
                              Mercado play
                          </il>
                          <il>
                              Vender
                          </il>
                          <il>
                              Ayuda
                          </il>
                      </ul>
                  </div>
              </div>

              <div className='h-100 w-25 bg-primary d-flex flex-column align-items-center justify-content-end'>
                <div className='ecommerce-option-nav-profile'>
                  <ul className='ecommerce-option-nav-profile-ul'>
                      <il>
                          Creá tu cuenta
                      </il>
                      <il>
                          Ingresá
                      </il>
                      <il>
                          Mis compras
                      </il>
                  </ul>
                </div>

              </div>



          </div>
          <div className='ecommerce-body'> </div>
          <div className='ecommerce-footer'>

            <ul className='ecommerce-option-footer'>
              <il>
                  Trabaja con nosotros
              </il>
              <il>
                  Terminos y condiciones
              </il>
              <il>
                  Como cuidamos tu privacidad
              </il>
              <il>
                  Accesibilidad
              </il>
              <il>
                  Informacion al usuario financiero
              </il>
              <il>
                  Ayuda
              </il>
              <il>
                  Defensa del Consumidor
              </il>
              <il>
                  Información sobre seguros
              </il>
            </ul>
           
          </div>

      </div>
  )
}

export default Ecommerce
