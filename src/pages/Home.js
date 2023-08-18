import React from 'react'

/** composant **/
import Banner from '../components/Banner'
import Card from '../components/Card'
import '../assets/styles/Home.scss'
import '../index.scss'
import BannerImg from '../assets/images/cap1.png'

/**fichier json */
import JsonLogement from '../data/logements.json'

function Home () {
  return (
    <div className=''>
       <Banner
        image={BannerImg} 
        text="Chez vous partout et ailleurs"
      />
      <div className="grid">
        
          {
            JsonLogement.map((item) => (
            <Card key={item.id} title={item.title} id={item.id} image={item.cover}/>        
            ))
          }  
      
      </div>
    </div>
  )
}
export default Home;