import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/17.jpeg"
import Trip2 from "../assets/15.jpeg"
import Trip3 from "../assets/16.jpeg"
function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You Can Discover Unique Destination Using Google Maps</p>
        <div className="tripcard">
            <TripData 
            image={Trip1}
            heading="Trip In India"
            text="India is a fantastic country, I absolutely love it and can never get enough. Many feel the same but others never visit put off by perceived difficulties. Travel in India is challenging, even more so with kids. Travelling around the country of India and learning more about Indian culture are fascinating and immensely rewarding."
            icon = "fa-solid fa-file-pdf fa-3x" style="color: #00000;"
            />
            <TripData 
            image={Trip2}
            heading="Trip In South Africa"
            text="South Africa is one of the most popular countries in Africa for tourism. Visitors can experience city life in Cape Town and Johannesburg, or get up close and personal with wildlife in safari destinations like Kruger National Park. Despite South Africa’s painful past and certain areas of the country that have a reputation for crime."
            icon = "fa-solid fa-file-pdf fa-3x" style="color: #00000;"
            />
            <TripData 
            image={Trip3}
            heading="Trip In Norway"
            text="Norway is one of my favorite countries to travel in, so aside from my blog posts about life in Norway, you’ll also find loads of articles and guides to my favorite areas of Norway. I’ve tried to organize all my Norway travel posts into a Norway travel guide on this page, including a Norway map of all the regions I know well here."
            icon = "fa-solid fa-file-pdf fa-3x" style="color: #00000;"
            />
        </div>
        </div>
    )
}

export default Trip;