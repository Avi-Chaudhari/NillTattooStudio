import Nill from '../assets/Nill.png'
import Studio from '../assets/Studio.jpg'
import Studio2 from '../assets/Studio2.jpg'
import Studio3 from '../assets/Studio3.jpg'
import BookAppointment from '../components/BookAppointment'

export default function About() {
  return (
    <div className='bg-black d-flex flex-column align-items-center' style={{ minHeight: "100dvh" }}>
      <div
        className="d-flex justify-content-center align-items-center text-center text-white border border-white border-2 rounded-3 mb-1"
        style={{
          backgroundImage: `url(${Nill})`,
          backgroundPosition: "top center",
          aspectRatio: "1086 / 1448",
          width: "min(100%, calc(100dvh * 1086 / 1448))",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div>
          <div>
            <h2>THE ARTIST</h2>
            <h1 style={{ fontSize: "3rem" }}><span className='fw-bolder roboto '>NITIN CHAUDHARI</span></h1>
            <p className='fw-bold'><span className='px-2 border-end'>TATTOO</span><span className='px-2 border-end'>SKETCH</span><span className='px-2'>PIERCING</span></p>
          </div>
        </div>
      </div>

      <div className='bg-white text-black w-100 py-5 px-3 px-md-5'>
        <div className='mx-auto' style={{ maxWidth: "900px" }}>
          <h1 className='fw-bold text-uppercase mb-0' style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 0.95 }}>The Story</h1>
          <p className='mb-4'>[A short introduction to the artist's journey goes here.]</p>

          <div className='row g-3 g-md-4 align-items-start mb-5'>
            <div className='col-6'>
              <img src={Nill} alt="Artist at work" className='w-100 shadow-sm' style={{ aspectRatio: "4 / 5", objectFit: "cover", filter: "grayscale(1)" }} />
            </div>
            <div className='col-6'>
              <p>Every design begins with a conversation, a memory, or a feeling waiting to be made visible. This is sample text for the artist's story.</p>
              <p>From the first sketch to the final detail, the work is shaped with patience, precision, and a love for meaningful art.</p>
              <p className='mb-0'>The studio is a place for bold ideas, quiet reflection, and tattoos that become part of your personal story.</p>
            </div>
          </div>

          <div className='row g-3 g-md-4 align-items-center'>
            <div className='col-6'>
              <p>What started as a fascination with drawing grew into a practice built around craft and connection. This is placeholder content for now.</p>
              <p className='mb-0'>Each appointment is approached with care, turning individual ideas into artwork made to last.</p>
            </div>
            <div className='col-6'>
              <img src={Nill} alt="Artist in the studio" className='w-100 shadow-sm' style={{ aspectRatio: "4 / 5", objectFit: "cover", filter: "grayscale(1)" }} />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white text-black w-100 px-3 px-md-5 pb-5'>
        <div className='mx-auto' style={{ maxWidth: "900px" }}>
          <h1 className='fw-bold text-uppercase mb-3' style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 0.95 }}>Behind the Ink</h1>
          <div className='row g-3 g-md-4 align-items-center'>
            <div className='col-5'>
              <img src={Nill} alt="Nitin in the studio" className='w-100 shadow-sm' style={{ aspectRatio: "4 / 5", objectFit: "cover" }} />
            </div>
            <div className='col-7'>
              <div className='mb-2 mb-md-4'>
                <h5 className='fw-bold text-uppercase mb-0'>Based in</h5>
                <p className='mb-0'>Sangamner, Maharashtra</p>
              </div>
              <div className='mb-2 mb-md-4'>
                <h5 className='fw-bold text-uppercase mb-0'>Specializes in</h5>
                <p className='mb-0'>Tattoo • Sketch • Piercing</p>
              </div>
              <div className='mb-2 mb-md-4'>
                <h5 className='fw-bold text-uppercase mb-0'>Creates</h5>
                <p className='mb-0'>Custom Artwork</p>
              </div>
              <div>
                <h5 className='fw-bold text-uppercase mb-0'>Studio</h5>
                <p className='mb-0'>Nill Tattoo Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' text-white text-center w-100 p-1'>
        <h1 className='p-5 mt-2 roboto fw-bolder'>THE STUDIO</h1>
        <div
          className="d-flex justify-content-center align-items-center text-center text-white border border-white border-2 rounded-3"
          style={{
            width: "100%",
            height: "70dvh",
            backgroundImage: `url(${Studio2})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <div className="mb-4">
              <h1 className=' orbitron' style={{ fontSize: "3rem" }}>Nill Tattoo Studio</h1>
            </div>
          </div>
        </div>
        <div className='row m-1'>
          <div className='col-6 p-2'>
            <img className=' border border-white border-2 rounded-3' src={Studio} width={" 100%"} alt="Nill Tattoo Studio" />
          </div>
          <div className='col-6 p-2'>
            <img className=' border border-white border-2 rounded-3 ' src={Studio3} width={"100%"} alt="Nill Tattoo Studio" />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center py-5 bg-black text-white text-center p-3'>
        <div className='row'>
          <div className='col-12'>
            <h1 className=' bebas-neue-regular mb-3' style={{ fontSize: "3rem" }}>LET'S CREATE SOMETHING PERSONAL.</h1>
          </div>
          <div className='col-12 col-md-6 '>
            <h4 className='roboto '>Have an idea in mind? <br/> let's discuss. <br/> Book your appointment now. </h4>
          </div>
          <div className='col-12 mt-4 align-content-center align-items-center col-md-6 mt-md-0'>
            <BookAppointment /> 
          </div>
        </div>
      </div>
    </div>
  )
}
