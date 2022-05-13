import React from 'react'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'


export const Home = () => {
  return (
    <>
    <div className="App-header">
        <HeaderHome/>
    </div>
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
   
    </>
  )
}
