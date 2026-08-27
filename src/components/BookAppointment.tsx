export default function BookAppointment() {
    const phone = "918104203773";
    const whatsapp = `https://wa.me/${phone}`;
    const instagram = `https://www.instagram.com/nill_tattoo19/`;

    return (
        <div className="roboto ">
            <div className="d-flex justify-content-center"><button className="btn btn-light fw-semibold">BOOK AN APPOINTMENT <span className="bi bi-arrow-down"></span></button></div>
            <div className="mt-3 d-flex justify-content-center">
                <a className='location-link border-end  px-3' href={instagram} rel="noopener noreferrer" target="_blank" ><span className='bi bi-instagram'></span> INSTAGRAM</a>
                <a className='location-link border-end border-start  px-3' href={whatsapp} rel="noopener noreferrer" target="_blank" ><span className='bi bi-whatsapp'></span> WHATSAPP</a>
                <a className='location-link border-start  px-3' href={`tel: ${"+" + phone}`} target='_blank'><span className='bi bi-telephone'></span> CALL</a>
            </div>
        </div>
    )
}