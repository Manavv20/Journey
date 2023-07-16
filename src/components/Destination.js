import Mountain1 from "../assets/10.jpeg"
import Mountain2 from "../assets/11.jpeg"
import Mountain3 from "../assets/12.jpeg"
import Mountain4 from "../assets/13.jpeg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"
const Destination = () =>{
    return(
        <div className="destination">
            <h1> Popular Destination</h1>
            <p>Tours give you the oppurtunity to see a lot, within a time frame.</p>
<DestinationData
className="first-des"
heading="Taj Mahal, India"
text="The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. Its recognised architectonic beauty has a rhythmic combination of solids and voids, concave and convex and light shadow; such as arches and domes further increases the aesthetic aspect. The colour combination of lush green scape reddish pathway and blue sky over it show cases the monument in ever changing tints and moods. The relief work in marble and inlay with precious and semi precious stones make it a monument apart. "
img1={Mountain1}
img2={Mountain2}
/>
<DestinationData
className="first-des-reverse"
heading="Gateway of India, India"
text="The Gateway of India, although built to commemorate the coronation celebration of King George V, became the entry point of British viceroys and governors. Ironically, it is also the site of the symbolic exit of the British from India, signaled by the passing of the first Battalion of the Somerset Light Infantry on 28 February 1948."
img1={Mountain3}
img2={Mountain4}
/>
        </div>
    )
}

export default Destination;