import React from 'react'

export const ButtonUI = ({classBtn, textName, event}) => {
  return (
    <button className={classBtn} onClick={event} >{textName}</button>
  )
}
