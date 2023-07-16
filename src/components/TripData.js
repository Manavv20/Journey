import { Link } from "react-router-dom";
import "./TripStyles.css"

function TripData(props) {
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"></img>
            </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <div className="icon-style">
        <Link>
        <i className={props.icon}></i>
        </Link>
        </div>
        </div>
    )
}
export default TripData;