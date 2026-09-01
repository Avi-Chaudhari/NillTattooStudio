import { useEffect, useState } from 'react';
import bgImage from '../assets/ArtWorkBG.png';
import all from '../assets/artworks';
import BookAppointment from '../components/BookAppointment';
import ShowMap from '../components/ShowMap';
import './ArtWork.css'

export default function ArtWork() {
  const categories = ["all", "tattoo", "piercing", "sketch"];
  const [active, setActive] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const filteredItems = active === "all"
    ?
    all
    :
    all.filter((item) => item.category === active);

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-center text-white special-height-box"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className='mt-5'>
          <div className=' p-3 '></div>
          <div>
            <h1 style={{ fontSize: "3rem" }}><span className='fw-bolder archivo-black-regular '>OUR WORK</span></h1>
            <p className='fw-bold'>By Nill Tattoo Studio</p>
          </div>
        </div>
      </div>
      <div className='w-100 justify-content-center text-center bg-dark-subtle'>
        <div className=' btn-group mt-3 mt-md-5 mb-3'>
          {
            categories.map((categorie) =>
              <button key={categorie} className={categorie == active ? " btn btn-outline-dark active fw-bold py-2 px-4" : "btn btn-outline-dark px-4 fw-bold py-2"} onClick={() => { setActive(categorie) }}>{categorie.toUpperCase()}</button>
            )
          }
        </div>
        <div className='p-2 p-md-3 d-flex justify-content-center w-100 flex-wrap' style={{ height: "67dvh", overflow: "auto" }}>
          {
            filteredItems.map((item) =>
              <div key={item.id} className='m-3'>
                <button
                  className="artwork-thumbnail"
                  type="button"
                  onClick={() => setSelectedImage(item.src)}
                  aria-label={`View ${item.category} artwork`}
                >
                  <img className='rounded-2 shadow-lg' width={"150px"} height={"250px"} src={item.src} alt="Nill Tattoo Studio" />
                </button>
              </div>
            )
          }
        </div>
        <div className='d-flex justify-content-center align-items-center py-5 bg-black text-white p-3'>
          <div className='row'>
            <div className='col-12'>
              <h1 className=' bebas-neue-regular mb-3' style={{ fontSize: "3rem" }}>Crafting Meaning Into Every ART</h1>
            </div>
            <div className='col-12 col-md-6 '>
              <h4 className='roboto '>Have an idea for your next tattoo? <br /> Let's turn it into an Art.</h4>
              <p className=''>We transform your ideas, memories, and emotions into timeless works of art. From personalized, creative, custom, name, and ambigram tattoos to expressive sketches, artistic blood paintings, and professional piercing, every creation is designed with imagination, precision, and meaning. Wear your story—beautifully, boldly, and forever.</p>
            </div>
            <div className='col-12 mt-4 align-content-center align-items-center col-md-6 mt-md-0'>
              <BookAppointment />
            </div>
          </div>
        </div>
        <div>
          <ShowMap />
        </div>
      </div>
      {selectedImage && (
        <div className="artwork-modal" role="dialog" aria-modal="true" aria-label="Artwork preview" onClick={() => setSelectedImage(null)}>
          <div className="artwork-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="artwork-modal-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Close artwork preview">
              &times;
            </button>
            <img src={selectedImage} alt="Nill Tattoo Studio artwork preview" />
          </div>
        </div>
      )}
    </div>
  )
}
