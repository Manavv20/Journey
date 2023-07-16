import "./ContactFormStyles.css"
// import  React from 'react'
function ContactForm(){
    return(
        <div className="from-container">
            <form>
                <h1>Send a Message to us</h1>
                <input type="text" id="name" class="form-control" placeholder="Enter your Name"/>
                <input type="text" id="email" class="form-control" placeholder="Enter your Email"/>
                <input type="text" id="subject" class="form-control" placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button type="submit">Submit</button>
                
            </form>
        </div>

    )
}
export default ContactForm;