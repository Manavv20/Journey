import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/pexels-adrian-falcon-3359250.jpg"
import Footer from "../components/Footer";
function Contact (){
    return(
        <>
       <Navbar/>
        <Hero 
   cName="hero-contact"
   heroImg={AboutImg}
   title="Contact"
   btnClass="hide"
   />
    <Footer/>

        </>
    )
    }
    export default Contact;