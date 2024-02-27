import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignUp = () => {
    return (
        <div className='loginSignUp'>
            <div className="loginSignUp-container">
                <h1>Registrarse</h1>
                <div className="loginSignUp-fields">
                    <input type="text" placeholder='Nombre' />
                    <input type="email" placeholder='Emal' />
                    <input type="password" placeholder='Contraseña' />
                </div>
                <button>Continuar</button>
                <p className="loginSignUp-login">Ya tienes una cuenta? <span>Iniciar sesión</span></p>
                <div className="loginSignUp-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
