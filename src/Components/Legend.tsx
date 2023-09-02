import { useState } from "react";
import "./Legend.css"; // Import the CSS file for styling

function Legend() {
    // State to control the animation
    const [animate, setAnimate] = useState(false);

    // Function to trigger the animation
    const startAnimation = () => {
        setAnimate(true);
    };

    return (
        <section id="legend">
            <div className={`legend-content ${animate ? "animate" : ""}`}>
                <h2>The Legend of Maveli</h2>
                <p>Maveli, the benevolent king of Kerala...</p>
                <button onClick={startAnimation}>Start Animation</button>
            </div>
        </section>
    );
}

export default Legend;
