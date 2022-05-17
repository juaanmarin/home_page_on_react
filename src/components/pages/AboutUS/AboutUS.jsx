import React from 'react'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { Title } from '../../UI/TitleP/Title'
import { NavHome } from '../../layouts/NavHome/NavHome'

export const AboutUS = () => {
  return (
    <>  
    <div className="App-header">
        <Title textTitle='aboutUS'></Title>
        <HeaderHome></HeaderHome>
    </div>
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
    </>
       
  )
}
