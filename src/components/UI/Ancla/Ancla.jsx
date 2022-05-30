import React from 'react'
import { Link } from 'react-router-dom'

export const Ancla = ({styleA,references,textAncla}) => {
  return (
    <Link className={styleA} to={references}> {textAncla} </Link>
  )
}
