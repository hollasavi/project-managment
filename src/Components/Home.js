import React from 'react'
import '../Assets/Home.css'
import Nav from './Nav'
import Carousel from './Carousel'

const Home = () => {
  return (
    <>
    <Nav/>
    {/* <div className='container'>
      <div className='slider'>hsdh jhsdbfjk snjkhdfjsn uihuidsnjui</div>
      <div className='slider'>hsdh jhsdbfjk snjkhdfjsn uihuidsnjui</div>
      <div className='slider'>hsdh jhsdbfjk snjkhdfjsn uihuidsnjui</div>
      <div className='slider'>hsdh jhsdbfjk snjkhdfjsn uihuidsnjui</div>
    </div> */}
    <Carousel/>
    </>
  )
}

export default Home