
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, body }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!isOpen);
  };

  //const collapseClass = isOpen ? 'collapse open' : 'collapse';

  return (
    <div className='collapse'>
      <div className='title' onClick={toggleCollapse}>
        <div>{title}</div> 
        <FontAwesomeIcon
        icon={isOpen ? faChevronUp : faChevronDown}/>
      </div>
      <div className='body'>
        {isOpen && <div>{body}</div>}
      </div>
    </div>
  );
};

export default Collapse;