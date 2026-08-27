export default function ShowMap() {
  return (
    <div className='d-flex justify-content-center align-items-center p-3 mb-4'>
      <div className='' style={{ width: "90dvw" }}>
        <h1 className="fw-bold bebas-neue-regular text-decoration-underline mb-3 mb-md-5"><span style={{ color: "grey" }} className=" text-decoration-underline">VISIT</span> NILL TATTOO</h1>
        <iframe className='rounded-top-3 w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15036.54922130106!2d74.2058568!3d19.5786174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd016023e69487%3A0xd859efcc33c3f6ce!2sNill%20Tattoo%20Studio!5e0!3m2!1sen!2sin!4v1787420409156!5m2!1sen!2sin" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        <a href="https://maps.app.goo.gl/v6uki2n9PGTNqJkp6" target='_blank' className='btn btn-dark w-100 rounded-top-0 mt-0'>GET DIRECTIONS</a>
      </div>
    </div>
  )
}