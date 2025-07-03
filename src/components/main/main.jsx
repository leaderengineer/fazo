import HotDealCard from "../card/hotDealCard";
import PopularSlider from "../slider/popularSlider";
import "./main.css";

function Main({ filtered, search, setProducts }) {
  return (
    <div className="main">
      <div className="container">
        <main>
          <div className="product-category">
            <h1 className="category-title">Горящие предложения</h1>
            <div className="category-link">
              <span>Посмотреть все</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <HotDealCard
            filtered={filtered}
            search={search}
            setProducts={setProducts}
          />
          <div className="popular-categories">
            <h1 className="category-title">Популярные категории</h1>
            <PopularSlider />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;
