import React from 'react'

export const Intput = ({clase, texto, name, type}) => {
  return (
      <input className={clase} type={type} placeholder={texto} name={name}/>   
  )
}
