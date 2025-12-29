const events = [
  { title: "WOODLEY vs THOMPSON", img: "./images/image-1.png" },
  { title: "KHABIB", img: "./images/image-2.png" },
  { title: "BLAKES vs DAUKUS", img: "./images/image-3.png" }
];
export default function FeaturedEvents() {
  return (
    <section style={{ marginTop: "80px" }}>
      <div className="container">
        <h2>FEATURED EVENTS</h2>
        <p className="subtext">Share Our Grand Experience.</p>

        <div className="event-grid">
          {events.map((e, i) => (
            <div className="event-card" key={i}>
              <img src={require((`${e.img}`))} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
