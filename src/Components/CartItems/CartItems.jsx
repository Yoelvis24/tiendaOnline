import React, { useContext } from 'react'
import './CartItems.css'
import { InicioContext } from '../../Context/InicioContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(InicioContext);
    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Productos</p>
                <p>Título</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Eliminar</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id] > 0)
                {
                    return <div>
                                <div className="cart-items-format">
                                    <img src={e.image} alt="" className='cart-icon-product-icon'/>
                                    <p className='title'>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img className='cart-items-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                </div>
                                <hr />
                            </div>
                }
                return null;
            })}
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Carrito</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Gastos de Envío</p>
                            <p>Gratis</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>VERIFICAR</button>
                </div>
                <div className="cart-items-promocode">
                    <p>Si tienes un código promocional, Colocarlo aquí</p>
                    <div className="cart-items-promobox">
                        <input type="text" placeholder='código promocional' />
                        <button>Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
