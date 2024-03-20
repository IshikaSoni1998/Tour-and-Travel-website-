import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../components/assets/contact.jpg"
function Contact() {
    return (
        <>
        <Navbar />
        <Hero
            cName="hero-contact"
            heroImg={ContactImg}
            btnClass="hide"
        />
    </>
    )
}
export default Contact;