import React from 'react'
import { Link } from "react-router-dom"
import '../pages/FicheLogement'

function Card({title, id, image}) {
    return (
        <div className="card">
            <Link to={`/FicheLogement/${id}`} >      
            <img src={`${image}`} alt={title} className='card_img'/>
            <p className="link-logement">{title}</p>
            </Link>            
        </div>
    )
}
 
export default Card