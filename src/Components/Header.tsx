import { useState } from "react";
import "./Header.css";
import { Squash as Hamburger } from "hamburger-react";

function Header() {
    const [isOpen, setOpen] = useState(false);
    return (
        <header>
            <div className={`ham`}>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    easing="ease-in"
                    rounded
                    color="var(--black)"
                />
            </div>
            <nav>
                <div className={`nav ${isOpen ? "show" : "hide"}`}>
                    <b>
                        <a href="#home">Home</a>
                    </b>
                    <b>
                        <a href="#about">About Maveli</a>
                    </b>
                    <b>
                        <a href="#legend">Legend</a>
                    </b>
                    <b>
                        <a href="#onam-festival">Onam Festival</a>
                    </b>
                    <b>
                        <a href="#gallery">Gallery</a>
                    </b>
                    <b>
                        <a href="#contact">Contact</a>
                    </b>
                </div>
            </nav>
            <div className="logo">
                <h1>Maveli's Portfolio</h1>
            </div>
        </header>
    );
}

export default Header;
