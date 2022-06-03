/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { HeaderHome } from '../../layouts/HeaderHome/HeaderHome'
import { NavHome } from '../../layouts/NavHome/NavHome'
import { Intput } from '../../UI/Input/Intput'
import { Title } from '../../UI/TitleP/Title'

export const Home = () => {

  let tendencia="trending"
  let buscar="search"
  let key="0L3UBB6Z2HFS"
  let limit="&limit=12"
  let url="https://g.tenor.com/v1/"

  const [characters, setCharacters]= useState([]);

  const getGif=()=>{
    fetch(`${url}${tendencia}?key=${key}${limit}`)
    .then(response=>response.json())
    .then(data=> setCharacters(data.results))
    .then(error=> console.log(error))
  }

  const searchGif=()=>{
    const textoo=document.getElementById("input")
    
    fetch(`${url}${buscar}?q=${textoo.value}&key=${key}${limit}`)
    .then(response=>response.json())
    .then(data=> setCharacters(data.results))
    .then(error=> console.log(error))
  }

  useEffect(() => {
    getGif();
  }, [])

  return (
    <>
    <div className="App-header">
        <Title></Title>
        <HeaderHome/>
    </div>
    
    <div className="App-Nav">
        <NavHome></NavHome>
    </div>
    <div className='section-Home'>
    <div className='buscar'>
      <Intput identificador="input" event={searchGif} texto="busque"></Intput>
    </div>
    <div className='gifs'>

    {characters.map((item, index) => (
      <div className="gif" key={index}>
          
          <img src={item.media[0].mediumgif.url} alt={item.content_description}></img>
          
      </div>
    ))}
    </div>
    </div>
    <Footer />
   
    </>
  )
}
