import React from 'react'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { ButtonUI } from '../../UI/buttonUI/ButtonUI'
import { Title } from '../../UI/TitleP/Title'

export const Contador = () => {

    

  return (
    <>
    <div className="App-header">
        <Title textTitle='Contador'></Title>
        <HeaderHome></HeaderHome>
    </div>
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
    <div className='section'>
        <h2 className='resultado'>resultado</h2>
        <ButtonUI style="mas" textName="mas"></ButtonUI>
        <ButtonUI style="menos" textName="menos"></ButtonUI>
        <ButtonUI style="restaurar" textName="restaurar"></ButtonUI>
    </div>

    </>
  )
}
