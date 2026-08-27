import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Nav.css'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark m-1 rounded-3 position-fixed w-100" id='navbar'>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img className=' rounded rounded-5 me-3' width={"30px"} src={logo} alt="Nills Tattoo"/>
          <span className='orbitron'>Nill Tattoo Studio</span>
        </NavLink>

        <button
          aria-controls="main-navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#main-navigation"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="main-navigation">
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item">
              <NavLink className="nav-link " to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artwork">
                ArtWork
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  )
}
