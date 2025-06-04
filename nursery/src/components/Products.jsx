import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import rightArrowGreen from "/assets/icons/arrow-right-green.svg";

const Products = ({ setCartItems }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/plants.json")
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error("failed to fetch", error));
  }, []);

  const [cactiData, setCactiData] = useState([]);
  useEffect(() => {
    fetch("/cacti.json")
      .then((response) => response.json())
      .then((cactiData) => setCactiData(cactiData.cacti))
      .catch((error) => console.error("failed tofetch", error));
  }, []);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const [disabledButtons, setDisabledButtons] = useState({});
  const handleClick = (itemId) => {
    setDisabledButtons((prev)=>({...prev,[itemId]:true}));
  }

  return (
    <section className="products">
      <h2 className="products-h2">Floor Plants</h2>
      <div className="plant-container">
        {data.map((item) => (
          <div className="plant-card" key={item.id}>
            <div className="img-container">
              <img className="plant-img" alt={item.name} src={item.img} />
            </div>
            <div className="product-text">
              <div className="name-type">
                <p className="plant-name">{item.name}</p>
                <p className="product-type">{item.type}</p>
              </div>
              <div className="price-btn">
                <p className="product-price">USD {item.price.toFixed(2)}</p>
                <button
                  className="add-btn"
                  disabled={disabledButtons[item.id]}
                  onClick={() => {
                    handleAddToCart(item);
                    handleClick(item.id);

                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="products-h2">Cacti</h2>
      <div className="plant-container">
        {cactiData.map((item) => (
          <div className="plant-card" key={item.id}>
            <div className="img-container">
              <img className="plant-img" alt={item.name} src={item.img} />
            </div>
            <div className="product-text">
              <div className="name-type">
                <p className="plant-name">{item.name}</p>
                <p className="product-type">{item.type}</p>
              </div>
              <div className="price-btn">
                <p className="product-price">USD {item.price.toFixed(2)}</p>
                <button
                  className="add-btn"
                  disabled={disabledButtons[item.id]}
                  onClick={() => {
                    handleAddToCart(item);
                    handleClick(item.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/cart">
        <button className="filled-btn2">
          Shopping Cart
          <img src={rightArrowGreen} alt="arrow" />
        </button>
      </NavLink>
    </section>
  );
};

export default Products;
