import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
    return (
    <div className='newsletter'>
        <h1>Recibe Ofertas Exclusivas En Tu Email</h1>
        <p>¡Queremos Que Siempre Estés Informado!</p>
        <div>
            <input type="email" placeholder='ejemplo@gmail.com' />
            <button>Subscribirse</button>
        </div>
    </div>
    )
}
