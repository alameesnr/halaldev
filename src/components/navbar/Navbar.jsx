// import React from 'react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/frontend/logo.png'
import cart_icon from '../assets/frontend/cart_icon.png'


const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''>
             </img>
             <p>PoshCovers</p>
       </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}to='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("menu")}}><Link style={{textDecoration: 'none'}} to='/menu'>Menu</Link>{menu==="menu"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Trendings")}}><Link style={{textDecoration: 'none'}} to='/trending'>Trending</Link>{menu==="Trendings"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="Womens"? <hr/>:<></>}</li>
      </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
