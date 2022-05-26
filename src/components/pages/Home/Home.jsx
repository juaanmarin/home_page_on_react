import React from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { Card } from '../../UI/Card/Card'
import { Title } from '../../UI/TitleP/Title'
import img from '../../../images/background-made-from-bricks.jpg'

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
      
      <Card style='card-rick' title='pepe' src={img} alt="aaaaaaaa"></Card>
    </div>
    <Footer />
   
    </>
  )
}
