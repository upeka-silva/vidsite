import { Carousel } from "bootstrap";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import VideoCarousel from "./components/VideoCarousel";
import PriceCard from "./components/PriceCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <VideoCarousel />
      <PriceCard />
      <Footer />
    </>
  );
}

export default App;
