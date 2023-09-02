import "./Home.css";
import maveli from "../assets/maveli2.png";

function Home() {
    return (
        <section id="home">
            <div className="hero">
                <div className="hero-image">
                    <img src={maveli} className="maveli" alt="Maveli" />
                </div>
                <h1 className="hero-title">Maveli's Portfolio</h1>
                <b>Discover the Legend of Kerala</b>
                <b>
                    If you want to read more about be, check out my{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Mahabali"
                        className="cta-button"
                    >
                        wiki page
                    </a>
                </b>
            </div>
        </section>
    );
}

export default Home;
