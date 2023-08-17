import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône star

function Etoile({ plein }) {
    const etoile = plein ? 'etoile-plein' : 'etoile-vide';

    return (
        <span className={`${etoile} star`}>
          <FontAwesomeIcon icon={faStar} className="star-icon" />
        </span>
    );
}
export default Etoile;
