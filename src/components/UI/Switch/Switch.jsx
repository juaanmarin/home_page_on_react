import React, { useEffect, useState } from 'react'

export const Switch = () => {
    
    let body=document.body;

    const [mode, setMode] = useState(false);

    const oscuro = ()=>{
        setMode(!mode);
    }
    useEffect(() => {
        if (mode){
            body.classList.add("color")
        }
        else {
            body.classList.remove("color")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode])
    

    // const oscuro=()=>{
    //     let body=document.body;
    //     body.classList.toggle("color");
    // }
  
    return (
    <>
        <div className='swtich-container'>
        <input type="checkbox" id='switch' />
        <label onClick={oscuro} for="switch" className='lbl'></label>
        </div>
    </>
  )
}
