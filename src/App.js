import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Footer from './components/Footer'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import FicheLogement from './pages/FicheLogement'

import JsonLogement from './data/logements.json'; 


function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />       
        {/*les routes */}
        <div className='app_main'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>} />  
            <Route path='/FicheLogement/:id' element={<FicheLogement jsonData={JsonLogement} />} />   
            <Route path='*' element={<Error />} />                     
          </Routes>
        </div>
        {/* fin des routes */}
        <Footer/>
      </Router>
    </div>
  );
}
export default App;