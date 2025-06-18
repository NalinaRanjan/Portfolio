import React from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Activelist from '../activelist/Activelist'
import Navbar from '../../components/navbar/Navbar'


const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homecontainer'>
        <Navbar />
        <Activelist />
      </div>
    </div>
  )
}

export default Home
