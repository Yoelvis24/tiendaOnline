import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { InicioContext } from '../../Context/InicioContext'
import nav_dropdown from '../Assets/dropdown.png'

export const Navbar = () => {
    
    //variable de estado de usuario
    const [menu, setMenu] = useState("inicio");
    const {getTotalCartItems} = useContext(InicioContext); 
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Tienda Online</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("inicio")}}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to ='/'>Inicio</Link>{menu==="inicio"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("hombres")}}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to ='/hombres'>Hombres</Link>{menu==="hombres"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mujeres")}}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to ='/mujeres'>Mujeres</Link>{menu==="mujeres"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to ='/kids'>Niños</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">               
                <Link to='/login'><button>Iniciar <span> </span>Sesión</button></Link>
                <Link to='/carrito'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
