import { useState } from "react";
import "./Legend.css";
import rider from "../assets/rider.png";

function Legend() {
    // State to control the animation
    const [animate, setAnimate] = useState(false);

    // Function to trigger the animation
    const startAnimation = () => {
        setAnimate(!animate);
    };

    return (
        <div className="legend-main">
            <div id="legend"></div>
            <div className="legend-content">
                <h2 className="legend-title">The Legend of Maveli</h2>
                <b className="legend-text">
                    <p>
                        So no time to explain my story... on a journey right now
                        &nbsp;
                        <span className="btn" onClick={startAnimation}>
                            OK
                        </span>
                    </p>
                </b>
                <div className="image">
                    <div
                        className={`${
                            animate ? "move-image" : "initial-image-position"
                        }`}
                    >
                        <img src={rider} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Legend;
