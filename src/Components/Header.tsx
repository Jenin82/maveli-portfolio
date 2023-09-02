import { useState } from "react";
import "./Header.css";
import { Squash as Hamburger } from "hamburger-react";

function Header() {
    const [isOpen, setOpen] = useState(false);

	const handleScroll = (targetId: string) => {
        const delay = 1000; // 1-second delay
        console.log("Clicked:", targetId);
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                console.log("Scrolling to:", targetId);
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }, delay);
    };

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
                        <a href="#home" onClick={() => handleScroll("home")}>
                            Home
                        </a>
                    </b>
                    <b>
                        <a href="#about" onClick={() => handleScroll("about")}>
                            About Maveli
                        </a>
                    </b>
                    <b>
                        <a
                            href="#legend"
                            onClick={() => handleScroll("legend")}
                        >
                            Legend
                        </a>
                    </b>
                    <b>
                        <a
                            href="#onam-festival"
                            onClick={() => handleScroll("onam-festival")}
                        >
                            Onam Festival
                        </a>
                    </b>
                    <b>
                        <a
                            href="#gallery"
                            onClick={() => handleScroll("gallery")}
                        >
                            Gallery
                        </a>
                    </b>
                    <b>
                        <a
                            href="#contact"
                            onClick={() => handleScroll("contact")}
                        >
                            Contact
                        </a>
                    </b>
                </div>
            </nav>
        </header>
    );
}

export default Header;
