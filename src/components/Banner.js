import React from "react"

function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <p className="banner-text">{text}</p> 
    </div>
  );
}
export default Banner; 