import React from 'react'

export const ButtonUI = ({style, textName, event}) => {
  return (
    <button className={style} onClick={event} >{textName}</button>
  )
}
