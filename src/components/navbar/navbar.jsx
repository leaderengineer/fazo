import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <div className="navbar-location">
            <i className="fa-solid fa-location-dot"></i>
            <span>Ташкент</span>
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#">Наши магазины</a>
            </li>
            <li>
              <a href="#">B2B продажи</a>
            </li>
            <li>
              <a href="#">Покупка в рассрочку</a>
            </li>
            <li>
              <a href="#">Способы оплаты</a>
            </li>
            <li>
              <a href="#">Гарантия на товары</a>
            </li>
          </ul>
          <div className="navbar-selection">
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <span>+998 95 123 55 88</span>
            </div>
            <select>
              <option value="Рус">Рус</option>
              <option value="Енг">Енг</option>
              <option value="Узб">Узб</option>
            </select>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
