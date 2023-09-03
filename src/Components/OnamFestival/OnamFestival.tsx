import './OnamFestival.css';
import one from '../../assets/pukalam.webp'
import two from '../../assets/sadhya.webp'
import three from '../../assets/kathakali.webp'

function OnamFestival() {
    return (
        <div className="onam-main">
            <div id="onam-festival"></div>
            <div className="onam-content">
                <h2>Onam Festival</h2>
                <b>
                    Onam is a vibrant and significant festival celebrated
                    predominantly in the southern Indian state of Kerala. It
                    marks the annual homecoming of the legendary King Mahabali,
                    or Maveli, a benevolent and just ruler who is believed to
                    have brought immense prosperity and happiness to his
                    kingdom. According to popular legend, despite his virtues,
                    King Mahabali was pushed down to the netherworld by Lord
                    Vishnu in his Vamana avatar, due to certain cosmic events.
                    However, moved by the king's devotion and the love of his
                    subjects, Lord Vishnu granted him a boon to visit his people
                    once every year. Onam commemorates this annual visit, and
                    Keralites across the world celebrate it with grand feasts,
                    boat races, traditional dances, and floral decorations,
                    capturing the spirit of unity, prosperity, and joy.
                </b>
            </div>
            <div className="onam-images">
                <div className="onam-image">
                    <img src={one} className='one' alt="Onam Celebration 1" />
                </div>
                <div className="onam-image">
                    <img src={two} className='two' alt="Onam Celebration 2" />
                </div>
                <div className="onam-image">
                    <img src={three} className='three' alt="Onam Celebration 3" />
                </div>
            </div>
        </div>
    );
}

export default OnamFestival;
