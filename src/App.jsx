import './index.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <div className="flex flex-col justify-between h-screen">
    <Navbar />
    <Footer />
    
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
