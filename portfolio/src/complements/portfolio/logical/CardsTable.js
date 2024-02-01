import React from 'react'
import { CustomRows } from './CustomRows'


export const CardsTable = ({card_filter, cardsData}) => {
  return (
    <table>
   <CustomRows card_filter={card_filter} cardsData={cardsData}></CustomRows>
    </table>
  )
}
