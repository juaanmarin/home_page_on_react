import React from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { ButtonUI } from '../../UI/buttonUI/ButtonUI'
import { Intput } from '../../UI/Input/Intput'
import { Title } from '../../UI/TitleP/Title'


export const ContactUS = () => {

  function sendEmail() {

  }

  return (
    <>
    <div className="App-header">
        <Title textTitle='ContactUS'></Title>
        <HeaderHome></HeaderHome>
    </div>
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
    <div className='section-Home'>
      <Intput clase="" type="" name="user_name" texto="name"></Intput>
      <Intput clase="" type="email" name="user_email" texto="Email" ></Intput>
      <Intput clase="" name="user_message" texto="Mensaje"></Intput>
      <ButtonUI classBtn="" event={sendEmail} textName="enviar"></ButtonUI>
    </div>
    <Footer />
    </>
    
  )
}
