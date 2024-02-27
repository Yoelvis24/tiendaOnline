import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusivas</h1>
                <h1>Ofertas Para Ti</h1>
                <p>LOS PRODUCTOS MÁS VENDIDOS</p>
                <button>Ver Producto</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
