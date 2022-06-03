import React from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { ButtonUI } from '../../UI/buttonUI/ButtonUI'
import { Intput } from '../../UI/Input/Intput'
import { Title } from '../../UI/TitleP/Title'
import emailjs  from '@emailjs/browser'

export const ContactUS = () => {

  const sendEmail=(event)=>{
    event.preventDefault();
    emailjs.sendForm('service_a9i3688', 'template_apamnro', event.target, 'P2_WnulkCk5Cf359t')
    .then(response=> console.log(response))
    .catch(error=> console.log(error))
  
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
      <div className='formulario-contactus'>
        <form className='formulario' onSubmit={sendEmail}>
          <Intput clase="inputUserName" type="text" name="user_name" texto="name"></Intput>

          <Intput clase="inputUserEmail" type="email" name="user_email" texto="Email" ></Intput>

          <textarea className='textmessage' name='user_message' id="" cols="30" rows="10" placeholder='escriba'></textarea>

          <ButtonUI classBtn="btnEmail" textName="enviar" ></ButtonUI>
        </form>
      </div>

    </div>
    <Footer />
    </>
    
  )
}
