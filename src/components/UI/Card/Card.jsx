import React from 'react'

export const Card = ({title, src, alt, style}) => {
  return (
    <>
        <div className={style}>
            <h2>{title}</h2>
            <img src={src} alt={alt} />
        </div>
    </>
  )
}
