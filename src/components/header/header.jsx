import Navbar from "../navbar/navbar";
import "./header.css";
import Logo from "../../assets/logo.png";
import Slider from "../slider/slider";

function Header({ search, setSearch }) {
  return (
    <div className="header">
      <Navbar />
      <div className="container">
        <header>
          <div className="header-top">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="search">
              <select>
                <option value="Все категории">Все категории</option>
              </select>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Телефоны и бытовая"
              />
              <i className="microphone fa-solid fa-microphone"></i>
              <div className="search-group">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Поиск</span>
              </div>
            </div>
            <div className="magazine-category">
              <div className="registration category">
                <i className="fa-solid fa-user"></i>
                <span>Войти</span>
              </div>
              <div className="comparison category">
                <i className="fa-solid fa-scale-unbalanced"></i>
                <span>Сравнение</span>
              </div>
              <div className="fetured category">
                <i className="fa-regular fa-heart"></i>
                <span>Избранное</span>
              </div>
              <div className="shop category">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Корзина</span>
              </div>
            </div>
          </div>
          <div className="header-pages-links">
            <button>
              <i className="fa-solid fa-list-ul"></i>
              <span>Категории</span>
            </button>
            <ul className="pages-links">
              <li>
                <a className="first" href="#">
                  Наши магазины
                </a>
              </li>
              <li>
                <a href="#">Моноблоки</a>
              </li>
              <li>
                <a href="#">Телефоны, планшеты</a>
              </li>
              <li>
                <a href="#">Ноутбуки</a>
              </li>
              <li>
                <a href="#">Комплектующие</a>
              </li>
              <li>
                <a href="#">Сетевое оборудование</a>
              </li>
              <li>
                <a href="#">Оргтехника</a>
              </li>
            </ul>
          </div>
          <Slider />
        </header>
      </div>
    </div>
  );
}

export default Header;
