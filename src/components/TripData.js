// import { Link } from "react-router-dom";
import React from "react";
import "./TripStyles.css";
import pdf from "../assets/Manav.pdf"
// import { pdfjs } from "react-pdf";
function TripData(props) {
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"></img>
            </div>
        <h4 >{props.heading}</h4>
        <p>{props.text}</p>
        
</div>  
    )
}
export default TripData;