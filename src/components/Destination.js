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
text="Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular view seen from Tagaytay Ridge."
img1={Mountain1}
img2={Mountain2}
/>
<DestinationData
className="first-des-reverse"
heading="India Gate, India"
text="Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular view seen from Tagaytay Ridge."
img1={Mountain3}
img2={Mountain4}
/>
        </div>
    )
}

export default Destination;