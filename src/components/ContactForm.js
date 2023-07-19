import { useState } from "react";
import "./ContactFormStyles.css"
import axios from "axios";
// import  React from 'react'
function ContactForm() {
    
      
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);
        alert("Form has been Submitted")

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    

    return (
    
        <div className="from-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                    type="text"
                    // placeholder="Please Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
                <br/>
                <label>
                    Email:
                    <input 
                    type="email"
                    // placeholder="Please Enter your Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
                <br/>
                <label>
                    Subject:
                    <input 
                    type="subject"
                    // placeholder="Please Enter Subject of your Message"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    />
                </label>
                <br/>
                <label>
                    Message:
                    <input 
                    type="message"
                    // placeholder="Please Enter Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="20"
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>

    
    );
}

export default ContactForm;