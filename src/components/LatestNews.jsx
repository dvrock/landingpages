

const newsData = [
  {
    id: 1,
    title: "MOHSEN MAKES HISTORY",
    text:"Mohsen Makes History , Becomes First Fighter To Win Three Fans Brave Cf Awards In the Same Year.",
    image: require("./images/news-1.png"),
  },
  {
    id: 2,
    title: "ISMAIL TO MIDDLEWEIGHT",
 text:"Rave Cf 79 Ismail Naurdiev Moves Up To Middleweight, Meets Tahar Hadbi In Main Event.",
    image: require("./images/news-2.png"),
  },
  {
    id: 3,
    title: "MOHSEN TO GO FOR GOLD",
    text:"Brave Cf Fighter And Wushu Legend Mohsen Mohammed To Go For Fourth Straight Gold At Asian Games.",
    image: require("./images/news-3.png"),
  },
];

export default function LatestNews() {
  return (
    <section className="latest-news">
      <div className="news-container">
        <h2 className="news-title">LATEST NEWS</h2>
        <p className="news-subtitle">Get To Know More.</p>

        <div className="news-grid">
          {newsData.map((item) => (
            <div className="news-card" key={item.id}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>

              <h4 className="news-heading">{item.title}</h4>
 <div className="news-text">
              {item.text}
              </div>
              <button className="news-btn">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
