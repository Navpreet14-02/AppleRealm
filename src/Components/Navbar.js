import React from 'react'
import profileImg from '../Web/profile_icon.svg'
import cartImg from '../Web/bag_icon.svg'
import { Link } from 'react-router-dom'

function Navbar(props) {


  return (
    <nav className="navbar">
      <div className="nav-head">
        <div className="choice">
          <select name="language">
            <option value="english">EN</option>
          </select>
          <select name="currency">
            <option value="dollar">$</option>
            <option value="dollar">₹</option>
          </select>
        </div>
        <div className="account">
          <p className='profile'><img src={profileImg} alt="" /> My profile</p>
          <p className='nav-cart'><Link  style={{textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'center'}} to={'/cart'}><img src={cartImg} alt="" style={{margin:'0 5px'}} /> {props.cartProds.length} items <span className="price" style={{margin:'0 4px'}}>${props.totalAmount}</span></Link></p>
          <div className="search">
            <img src={require('../Web/search_icon.png')} alt="" />
            <input type="text" name="search" />
          </div>
        </div>
      </div>
      <h1 className="logo">AppleRealm</h1>
      <ul className="nav-items">
        <li><Link to={'/'} className='nav-links'>HOME</Link> </li>
        <li><Link to={'/store'} className='nav-links'>STORE</Link></li>
        <li>IPHONE</li>
        <li>IPAD</li>
        <li>MACBOOK</li>
        <li>ACCESORIES</li>
      </ul>
    </nav>
  )
}

export default Navbar