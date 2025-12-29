import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedEvents from "./components/FeaturedEvents";
import LatestNews from "./components/LatestNews";
import FightersSpotlight from "./components/FightersSpotlight";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <LatestNews />
      <FightersSpotlight />
      <Partners />
      <Footer />
    </>
  );
}
