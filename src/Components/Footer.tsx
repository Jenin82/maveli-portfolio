

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Maveli's Portfolio</p>
                <div className="social-icons">
                    {/* Add social media icons and links */}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    {/* Add more social media icons as needed */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
