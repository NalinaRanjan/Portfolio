import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'; // Import UserContext
import './Navbar.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
const handlelogout =()=>{
  navigate("/")
}
  const {user} = useContext(UserContext)
  return (
    <div className='navbar'>
      <div className="right">
        <div><img src="/logo.PNG"></img></div>
        <div className='search'>
          <span className="material-icons srchicon">search</span>
          <input type="search" placeholder='Search....'></input>

        </div>
      </div>
      <div className="left">
        {/* <div className='lefticons'><NotificationsIcon /></div> */}
        <div className='lefticons'><h5> Welcome DR.{user}</h5></div>
        <div className='lefticons'><img src="/images.png" height="30px" width="30px"></img></div>
        {/* <div className='lefticons'><SettingsIcon /></div> */}
        <div className='lefticons'><LogoutIcon onClick={handlelogout} /></div>
      </div>
    </div>
  )
}

export default Navbar
