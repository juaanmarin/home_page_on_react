import React, { useState } from 'react'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { ButtonUI } from '../../UI/buttonUI/ButtonUI'
import { Title } from '../../UI/TitleP/Title'

export const Contador = () => {

  const [num,setNum]=useState(0);

  return (
    <>
    <div className="App-header">
        <Title textTitle='Contador'></Title>
        <HeaderHome></HeaderHome>
    </div>
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
    <div className='App-section'>
        <h2 className='resultado'>{num}</h2>
        <div className='botones'>
          <ButtonUI style="mas" event={()=>setNum(num+1)} textName="mas +"></ButtonUI>
          <ButtonUI style="menos" event={()=>setNum(num-1)} textName="menos -"></ButtonUI>
          <ButtonUI style="restaurar" event={()=>setNum(0)} textName="restaurar 0"></ButtonUI>
        </div>
        
    </div>

    </>
  )
}
