import BookAppointment from "./BookAppointment";
import bgImage from '../assets/HomeBG.png';

export default function Hero() {

    return (
        <div
            className="d-flex justify-content-center align-items-center text-center text-white"
            style={{
                height: "100dvh",
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div>
                <div className="mb-4 px-sm-2">
                    <h1 className=' orbitron text-capitalize' style={{ fontSize: "3rem" }}>NILL TATTOO STUDIO & PIERCINGS</h1>
                    <div className="px-4">9/A City Centre, Near Delite Cafe, Maldad Road,</div>
                    <div>Sangamner, Maharashtra</div>
                </div>
                <h2 className="archivo-black-regular " >ART THAT BECOMES PART OF YOU.</h2>
                <div className="mt-5">
                    <BookAppointment />
                </div>
            </div>
        </div>
    )
}
