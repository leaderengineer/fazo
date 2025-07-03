import "./hotDealCard.css";
import camera from "../../assets/database/camera.png";
import { useEffect, useState } from "react";
import axios from "axios";

function HotDealCard() {
  const [products, setProducts] = useState([]);

  console.log(products);

  // Malumot olish
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Xatolik", err));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="cards">
          {products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <span className="discountParcent">
                  {product.discountPercent}%
                </span>
                <img src={product.image} alt="" />
                <div className="card-content">
                  <div className="price">
                    <span className="disountPrice">
                      {product.discountPrice} сум
                    </span>
                    <span className="realPrice">{product.realPrice} сум</span>
                  </div>
                  <h4 className="card-name">{product.name}</h4>
                  <p className="card-time-title">
                    Предложение заканчивается через:
                  </p>
                  <div className="card-discount-time">
                    <p className="discount-day date">
                      <span>27</span>
                      <span>ДНЕЙ</span>
                    </p>
                    <p className="discount-hour date">
                      <span>21</span>
                      <span>ЧАСОВ</span>
                    </p>
                    <p className="discount-minute date">
                      <span>32</span>
                      <span>МИНУТ</span>
                    </p>
                    <p className="discount-second date">
                      <span>05</span>
                      <span>СЕКУНД</span>
                    </p>
                  </div>
                </div>
                <div className="card-controls-button">
                  <i className="controls-button fa-solid fa-cart-shopping"></i>
                  <i className="controls-button fa-regular fa-heart"></i>
                  <i className="controls-button fa-solid fa-scale-unbalanced"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HotDealCard;
