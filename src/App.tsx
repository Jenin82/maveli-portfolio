// App.tsx
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Legend from "./Components/Legend";
import OnamFestival from "./Components/OnamFestival";


function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Legend />
            <OnamFestival />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;