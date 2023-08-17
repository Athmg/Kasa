import React from 'react'
import Banner from '../components/Banner'
import BannerImg from '../assets/images/cap2.png'

import Collapse from '../components/Collapse';

function About() {
  return (
    <div>
      <Banner image={BannerImg}/>
      <div className='container'>
        <div className='container_collapse'>
        <Collapse
          title="Fiabilité"
          body="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes." 
          sizeWidth={false}
        />
        </div>
        <div className='container_collapse'>
        <Collapse
          title="Respect"
          body="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme." 
          sizeWidth={false}
        />
        </div>
        <div className='container_collapse'>
        <Collapse
          title="Service"
          body="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme." 
          sizeWidth={false} 
        />
        </div>
        <div className='container_collapse'>
        <Collapse
          title="Sécurité"
          body="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes." 
          sizeWidth={false} 
        />
        </div>
      </div>
    </div>
  );
};
export default About;