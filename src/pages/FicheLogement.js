import React from "react"
import { useParams } from "react-router-dom"


import Error from './Error'
import Etoile from "../components/Etoile"
import Tag from "../components/Tag"
import Cercle from "../components/Cercle"
import Carousel from "../components/Carousel"
import Collapse from "../components/Collapse"

function FicheLogement({ jsonData }) {
    const { id } = useParams()
    // l'ID du logement
    const logement = jsonData.find((item) => item.id === id)
    if (!logement) {
        return (
            <Error />
        )
    }
    return (
        <div className="logement">
            {/*Caroussel*/}
            <Carousel images={logement.pictures} />

            <section className="logement_header">
                <div className="header-container">
                    <div className="header_title">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className="header_tags">
                        {logement.tags.map((tag) => (
                            <Tag key={tag} contenu={tag} />
                        ))}
                    </div>
                </div>
                <div className="logement_host">
                    <div className="host_container">
                        <span className="host_name">{logement.host.name}</span>
                        <Cercle src={logement.host.picture} />
                    </div>
                    {/* Rating */}
                    <div className="host_etoiles">
                        {
                            [0, 1, 2, 3, 4].map((i) => (
                                <Etoile key={i} plein={i < logement.rating} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className="collapse_container">
                
                {/* Description */}
                <div className="col-description">
                    <Collapse
                        title="Description"
                        body={logement.description}
                        //sizeWidth={true}
                         />
                </div>

                {/* Equipement */}
                <div className="col-description">
                    <Collapse
                        title="Equipement"
                        body={
                            logement.equipments.map(
                                (equipment) => (
                                    <div key={equipment}> {equipment} </div>
                                ))
                        }
                   // sizeWidth={true} 
                   />
                </div>
            </div>
        </div>
    )
} export default FicheLogement