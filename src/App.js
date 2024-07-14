import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
