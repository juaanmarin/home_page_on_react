import React from 'react'
import {Ancla} from "../../UI/Ancla/Ancla"

export const NavHome = () => {
  return (

    <nav>
        <Ancla style="ancla" references="/" textAncla="Home" />
        <Ancla style="ancla" references="/aboutUS" textAncla="AboutUS" />
        <Ancla style="ancla" references="/contactUS" textAncla="ContactUS" />
    </nav>

  )
}
