import React from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { Title } from '../../UI/TitleP/Title'

export const Home = () => {

  return (
    <>
    <div className="App-header">
        <Title></Title>
        <HeaderHome/>
    </div>
    
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
    <div className='section-Home'>
      
    </div>
    <Footer />
   
    </>
  )
}
