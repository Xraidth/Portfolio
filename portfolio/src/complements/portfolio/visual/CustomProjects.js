import React from 'react'
import { cardsData } from '../Data/PortFolioData.js'
import {CardsTable} from '../logical/CardsTable.js'

const CustomProjects = ({filter}) => {
  return (
    <div className='App-body-porfolio'>
    <div className='App-body-title-div' id='App-Projects'>  
    <span className='App-body-title-span'>
      <h5>My Projects</h5>
    </span>
    </div>
  
  <div className="App-SubBG scroll-both">
    <CardsTable card_filter={filter} cardsData={cardsData}></CardsTable>
  </div>
  </div>
  )
}

export default CustomProjects
