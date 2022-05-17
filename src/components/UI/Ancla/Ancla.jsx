import React from 'react'
import { Link } from 'react-router-dom'

export const Ancla = ({style,references,textAncla}) => {
  return (
    <Link className={style} to={references}> {textAncla} </Link>
  )
}
