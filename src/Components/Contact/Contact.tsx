import "./Contact.css";

function Contact() {
    return (
        <div className="contact-main">
            <div id="contact"></div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form action="https://formspree.io/f/xpzgrdbv" method="POST">
                    <label>
                        Your email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Your message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
