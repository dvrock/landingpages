import "./Partners.css";

export default function Partners() {
  return (
    <section className="section">
      <h2>OUR PARTNERS</h2>
      <p className="subtext">Our Trusted Allies</p>
      <div className="partners">
        <img src={require("./images/logos-1.png")} alt="Partner 1" />
        <img src={require("./images/logos-2.png")} alt="Partner 2" />
        <img src={require("./images/logos-3.png")} alt="Partner 3" />
        <img src={require("./images/logos-4.png")} alt="Partner 4" />
      </div>
    </section>
  );
}
