import React from 'react'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { Title } from '../../UI/TitleP/Title'

export const ContactUS = () => {
  return (
    <>
    <div className="App-header">
        <Title textTitle='ContactUS'></Title>
        <HeaderHome></HeaderHome>
    </div>
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
    </>
    
  )
}
