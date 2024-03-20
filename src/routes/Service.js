import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../components/assets/service.png"
function Service() {
    return (
        <>
        <Navbar />
        <Hero
            cName="hero-mid"
            heroImg={ServiceImg}
            btnClass="hide"
        />
    </>
    )
}
export default Service;