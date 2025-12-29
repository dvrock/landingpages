
import fighter1 from "./images/spotlight.png";
import fighter2 from "./images/spotlight-2.png";

export default function FightersSpotlight() {
  return (
    <section className="fighters-spotlight">

      {/* ABSOLUTE WATERMARK */}
      <div className="spotlight-watermark">
      <span className="spotlight-watermark-fighter"> FIGHTER’S </span> <br /> <span className="spotlight-watermark-Spotlight"> SPOTLIGHT</span>
      </div>

      {/* CONTENT */}
      <div className="spotlight-content">
        <img src={fighter1} alt="Fighter Left" className="fighter left" />
        <img src={fighter2} alt="Fighter Right" className="fighter right" />
      </div>

    </section>
  );
}
