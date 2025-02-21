import "./TravelPlanner.css";
const categories = [
  { name: "北部", img: "cityscape-5543223_1280.jpg" },
  { name: "中部", img: "top-ten-pic-06.jpg" },
  { name: "南部", img: "kaoshiung-7566475_1280.jpg" },
  { name: "東部", img: "rice-fields-7230362_1280.jpg" },
  { name: "離島", img: "matsu-islands-1883646_1280.jpg" },
];

const themes = [
  { name: "露營", img: "ai-generated-8363000_1280.png" },
  { name: "爬山", img: "ai-generated-8995601_1280 (1).jpg" },
  { name: "國家公園", img: "nature-2088481_1280.jpg" },
];
function App() {
  

  return (
    <>
       <div className="container">
      <header className="header">
        <span className="title">旅遊規劃</span>
        <nav className="nav">
          <a href="#">主題</a>
          <a href="#">景點</a>
          <a href="#">旅遊指南</a>
          <a href="#">關於我們</a>
        </nav>
      </header>

      <div className="banner">
        <button className="start-button">開始規劃你的行程</button>
      </div>

      <section className="section">
        <h2 className="section-title">區域</h2>
        <div className="grid">
          {categories.map((category, index) => (
            <div key={index} className="grid-item">
              <img src={category.img} alt={category.name} className="image" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">主題</h2>
        <div className="grid">
          {themes.map((theme, index) => (
            <div key={index} className="grid-item">
              <img src={theme.img} alt={theme.name} className="image1" />
              <p>{theme.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section center">
        <h2 className="section-title">旅遊指南</h2>
        <div className="icon-container">
          <div className="icon-item">
            <div className="icon"></div>
            <p>交通資訊</p>
          </div>
          <div className="icon-item">
            <div className="icon"></div>
            <p>天氣資訊</p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
