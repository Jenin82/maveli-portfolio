import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Maveli's Portfolio</p>
            </div>
        </footer>
    );
}

export default Footer;
