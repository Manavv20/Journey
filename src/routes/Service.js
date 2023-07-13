import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/8.jpeg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Navbar/>
        <Hero 
   cName="hero-service"
   heroImg={AboutImg}
   title="Service"
   btnClass="hide"
   />
   <Trip/>
   <Footer/>
        </>
    )
    }
    export default Service;