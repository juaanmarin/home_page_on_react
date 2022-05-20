import React from 'react'

export const Switch = () => {
    
    const oscuro=()=>{
        let body=document.body;
        body.classList.toggle("color");
    }
  
    return (
    <>
        <div className='swtich-container'>
        <input type="checkbox" id='switch' />
        <label onClick={oscuro} for="switch" className='lbl'></label>
        </div>
    </>
  )
}
