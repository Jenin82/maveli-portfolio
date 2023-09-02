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
        <section className="legend-main">
            <div id="legend"></div>
            <div className={"legend-content"}>
                <h2 className="legend-title">The Legend of Maveli</h2>
                <b className="legend-text">
                    So no time to explain my story... on a journey right now
                    <span className="btn" onClick={startAnimation}>
                        OK
                    </span>
                </b>
                <div
                    className={` ${
                        animate ? "move-image" : "initial-image-position"
                    }`}
                >
                    <img src={rider} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Legend;
