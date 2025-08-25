import React from 'react'
import './Navbar.css'
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <h2 className='logo'>Muhammadsodiq</h2>
      <h1 className='logo'> </h1>
        <ul className='collaction'>
          <Link className='link' to={'/'}>
            <li className='item'>Bosh sahifa</li>
          </Link>
          <Link className='link' to={"/cs"}>
            <li className='item'>Counter strike 1.6</li>
          </Link>
          <Link className='link' to={"/news"}>
            <li className='item'>Yangiliklar</li>
          </Link>
          {/* <Link className='link' to={"/funny"}>
            <li className='item'>Zapallar</li>
          </Link> */}
        </ul>
        <button className='profil'><FaCircleUser className='icon'/></button>
    </div>
  )
}

export default Navbar