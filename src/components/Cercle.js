import React from 'react'

function Cercle({ src }) {
    return (
    <div className="cercle-img">
        {src && <img src={src} alt="hote" className="image" />}
    </div>
)
}
export default Cercle



