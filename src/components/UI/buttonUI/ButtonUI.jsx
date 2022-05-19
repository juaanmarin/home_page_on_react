import React from 'react'

export const ButtonUI = ({style, textName}) => {
  return (
    <button className={style}> {textName}</button>
  )
}
