import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../components/assets/about.jpg"

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                btnClass="hide"
            />
        </>
    )
}
export default About;