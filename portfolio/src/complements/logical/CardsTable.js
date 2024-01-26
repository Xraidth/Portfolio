import React from 'react'
import { CustomRows } from './CustomRows'

export const CardsTable = ({card_filter}) => {
  return (
    <table>
   <CustomRows card_filter={card_filter}></CustomRows>
    </table>
  )
}
