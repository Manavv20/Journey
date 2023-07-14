import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Happy Journey</h1>
                    <p>Choose your favorite Destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook">
                        </i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram">
                        </i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter">
                        </i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">ChangeIcon</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Pages</h4>
                    <a href="/">About</a>
                    <a href="/">Service</a>
                    <a href="/">Contact</a>
                    <a href="/">Home</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms Of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>

    )

}

export default Footer;