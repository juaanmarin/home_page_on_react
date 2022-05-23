import React, { useState, useEffect } from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { ButtonUI } from '../../UI/buttonUI/ButtonUI'
import { Title } from '../../UI/TitleP/Title'
import sol from "../../../images/dom.png"
import solD from "../../../images/dom1.png"

export const Contador = () => {

  const [num,setNum]=useState(0);

  const [cont, setCont] = useState(1);

  useEffect(() => {

    const image=document.getElementById("image");

    if(num>99){
      image.setAttribute("src",solD );
    }
    else{
      image.removeAttribute("src");
      image.setAttribute("src",sol );
    }
  }, [num])
    

  const cambio=( {target} )=>{
    setCont(parseInt(target.value))
  }
  
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
        <select onChange={cambio} name="" id="select">
          <option id='options' value="1">contador 1</option>
          <option id='options' value="10">contador 10</option>
        </select>
        <div className="contador">
          <h2 className='resultado'>{num}</h2>
          <div className='botones'> 
            <ButtonUI classBtn="mas" event={()=>setNum(num+cont)} textName="mas +"></ButtonUI>
            <ButtonUI classBtn="menos" event={()=>setNum(num-cont)} textName="menos -"></ButtonUI>
            <ButtonUI classBtn="restaurar" event={()=>setNum(0)} textName="restaurar 0"></ButtonUI>
          </div>  
        </div>
        
        <div className='card'>
          <img id='image' src="" alt="sol" />
        </div>

    </div>
    
    <Footer></Footer>
    </>
  )
}
