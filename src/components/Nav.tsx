import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Nav.css'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('touchstart', closeOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('touchstart', closeOnOutsideClick);
    };
  }, []);

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark m-1 rounded-3 position-fixed w-100" id='navbar'>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img className=' rounded rounded-5 me-3' width={"30px"} src={logo} alt="Nills Tattoo"/>
          <span className='orbitron'>Nill Tattoo Studio</span>
        </NavLink>

        <button
          aria-controls="main-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="main-navigation">
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item">
              <NavLink className="nav-link " to="/" end onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artwork" onClick={() => setIsOpen(false)}>
                ArtWork
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
                About
              </NavLink>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  )
}
