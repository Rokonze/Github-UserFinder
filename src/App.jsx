import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Alert from './components/Alert'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  

  return (
    
    <GithubProvider>
      <AlertProvider>
      <BrowserRouter>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

            <main className="container mx-auto px-2 pb-12">
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>

            </main>

          <Footer />
        
        </div>
      </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
    
  )
}

export default App
