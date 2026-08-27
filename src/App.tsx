import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ArtWork from './pages/ArtWork'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className="app-layout roboto">
        <Nav />
        <main className="hero-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/artwork' element={<ArtWork />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
