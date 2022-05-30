import React from 'react'
import {Ancla} from "../../UI/Ancla/Ancla"

export const NavHome = () => {
  return (

    <nav>
        <Ancla styleA="ancla" references="/" textAncla="Home" />
        <Ancla styleA="ancla" references="/aboutUS" textAncla="AboutUS" />
        <Ancla styleA="ancla" references="/contactUS" textAncla="ContactUS" />
        <Ancla styleA="ancla" references="/Contador" textAncla="Contador" />
    </nav>

  )
}
