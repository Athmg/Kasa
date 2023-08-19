import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Carousel = ({ images }) => {
  const [index, setImage] = useState(0)

  const nextImage = () => {
    if (index === images.length - 1) {
      setImage(0)
    } else {
      setImage(index + 1)
    }
  }
  const previousImage = () => {
    if (index === 0) {
      setImage(images.length - 1)
    } else {
      setImage(index - 1)
    }
  }
  // Vérifier si le carousel a une seule photo
  const isSingleImage = images.length === 1;
  return (
    <div className='carousel-container'>
      <div>
        <img className='carousel_img' src={images[index]} alt={`Slide ${index + 1}`} />
      </div>
      {!isSingleImage && (
        <div>
          <span className='arrow arrow_left' onClick={previousImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <span className='arrow arrow_right' onClick={nextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      )}
      {!isSingleImage && (
        <div className='index'>
          {`${index + 1}/${images.length}`}
        </div>
      )}
    </div>
  )
}

export default Carousel
