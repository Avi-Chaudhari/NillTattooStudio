import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  const phone = "918104203773";
  const whatsapp = `https://wa.me/${phone}`;
  const instagram = `https://www.instagram.com/nill_tattoo19/`;
  return (
    <div className='bg-black text-white pt-4'>
      <div className="d-flex justify-content-center text-center">
        <div className='fw-bold px-3'>
          <img className='rounded-circle' width={"25%"} src={logo} alt="Nills Tattoos"/>
          <div className='h3 fw-bold orbitron'>Nill Tattoo Studio</div>
          <div>9/A City Centre, Near Delite Cafe, Maldad Road, Sangamner, Maharashtra</div>
          <div style={{fontSize:"1.9rem"}} className='d-flex justify-content-around mt-3'>
            <a className='location-link' href={instagram} rel="noopener noreferrer" target="_blank" ><span className='bi bi-instagram'></span></a>
            <a className='location-link' href={whatsapp} rel="noopener noreferrer" target="_blank" ><span className='bi bi-whatsapp'></span></a>
            <a className='location-link' href={`tel: ${"+"+phone}`} target='_blank'><span className='bi bi-telephone'></span></a>
            <a className='location-link' href="https://maps.app.goo.gl/v6uki2n9PGTNqJkp6" target='_blank'><span className='bi bi-geo-alt'></span></a>
          </div>
        </div>
      </div>
      <div className=' text-center bg-dark mt-4'><span className='bi bi-c-circle'></span> 2026 Nill Tatto. All rights reserved.</div>
    </div>
  )
}
