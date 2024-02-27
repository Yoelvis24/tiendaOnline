import React, { useContext } from 'react'
import './CSS/Categoria.css'
import { InicioContext } from '../Context/InicioContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import {Item} from '../Components/Items/Item'

export const Categoria = (props) => {
    const {all_product} = useContext(InicioContext);
    return (
        <div className='categoria'>
            <img className='categoria-banner' src={props.banner} alt="" />
            <div className="categoria-indexSort">
                <p>
                    <span>Ver 1-12</span> de 36 productos
                </p>
                <div className="categoria-sort">
                    Ordenar por <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="categoria-productos">
                {all_product.map((item, i)=>{
                    if(props.category===item.category)
                    {
                        return <Item key={i} 
                                id={item.id} 
                                name={item.name} 
                                image={item.image} 
                                new_price={item.new_price} 
                                old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="categoria-loadMore">
                Explorar Más
            </div>
        </div>
    )
}
