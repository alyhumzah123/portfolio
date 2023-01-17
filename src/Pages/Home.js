import React from 'react'
import Header from "../Components/Header"
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='container-fluid  mx-auto background min-h-screen ' id='home'>
      <Navbar />
      <Header />
    </div>
  )
}

export default Home
