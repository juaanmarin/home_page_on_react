import React from 'react'

export const Intput = ({identificador, clase, texto, name, type, event}) => {
  return (
      <input id={identificador} className={clase} type={type} placeholder={texto} name={name} onChange={event}/>   
  )
}
