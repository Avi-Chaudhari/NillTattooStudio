import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import { Link } from "react-router-dom";
import all from "../assets/artworks";
import ShowMap from '../components/ShowMap';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div>
        <div className='bg-dark-subtle text-dark text-center'>
          <div className="py-5" style={{ width: "98dvw", overflow: "auto" }}>
            <div>
              <div className="  mb-4">
                <h1 className="fw-bold bebas-neue-regular text-decoration-underline"><span style={{color:"grey"}} className=" text-decoration-underline">ART</span>WORKS </h1>
              </div>
              <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 pb-3 px-1">
                {
                  all.map((product) =>
                    <div className="" key={product.id} >
                      <img className="rounded-3" width={"150px"} height={"250px"} src={product.src} alt="Nill Tattoo Studio" />
                    </div>
                  )
                }
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Link to={'/artwork'} className="btn btn-dark px-4 py-2 fw-bold" >
                  View More <span className="bi bi-arrow-right "></span>
                </Link>
              </div>
            </div>
          </div>
          <div className=' mt-3'>
            <h1 className="fw-bold bebas-neue-regular text-decoration-underline"><span style={{color:"grey"}} className=" text-decoration-underline">FROM IDEAS TO</span> THE ART </h1>
            <div className='row mx-0 py-5 px-3 px-md-5 text-dark'>
              <div className='col-4 px-md-3'>
                <div className='border-bottom m-1' style={{ fontSize: "2rem" }}><span className='bi bi-person'></span><span className='bi bi-chat'></span></div>
                <span className='fw-bolder'>DISCUSS</span>
                <p className='fw-semibold mt-1'>Share your ideas, concepts, reference or inspiration.</p>
              </div>
              <div className='col-4 px-md-3'>
                <div className='border-bottom m-1' style={{ fontSize: "2rem" }}><span className='bi bi-file-earmark-text'><i className="bi bi-pen"></i></span></div>
                <span className='fw-bolder'>DESIGN</span>
                <p className='fw-semibold mt-1'>Develope and costomize your artwork.</p>
              </div>
              <div className='col-4 px-md-3'>
                <div className='border-bottom m-1' style={{ fontSize: "2rem" }}><span className='bi bi-pencil-square'></span></div>
                <span className='fw-bolder'>INK</span>
                <p className='fw-semibold mt-1'>Turn the final artwork into a tattoo.</p>
              </div>
            </div>
          </div>
          <div className='pt-3 pt-md-3'>
            <h1 className="fw-bold bebas-neue-regular text-decoration-underline mb-3 mb-md-5"><span style={{color:"grey"}} className=" text-decoration-underline">WHY CHOOSE</span> NILL TATTOO ?</h1>
            <div className='p-2'>
              <div className='row mx-0'>
                <div className='col-6'>
                  <h6 className='fw-bold'>CUSTOM ART</h6>
                  <p>Designs can be developed around the individuals ideas.</p>
                </div>
                <div className='col-6'>
                  <h6 className='fw-bold'>ARTIST-LED</h6>
                  <p>The work is Personally created by the Artist Nitin Chaudhari.</p>
                </div>
              </div>
              <div className='row mx-0 mt-3'>
                <div className='col-6'>
                  <h6 className='fw-bold'>MULTIPLE ARTS</h6>
                  <p>We have multiple forms of art like Tattoo, Pircing, Sketching, and Blood Painting as well.</p>
                </div>
                <div className='col-6'>
                  <h6 className='fw-bold'>PERSONAL EXPRESSION</h6>
                  <p>Our goal is to create an artwork that will express you personally.</p>
                </div>
              </div>
            </div>
          </div>
          <div><Reviews /></div>
          <div>
            <ShowMap />
          </div>
        </div>
      </div>

    </div>
  )
}
