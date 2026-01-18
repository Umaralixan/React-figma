import BrendImg from "../../assets/img/BrendImg.svg";
import BreandImg from "../../assets/img/BreandImg.svg";
import BarndImg from "../../assets/img/Barndimg.svg";

import "./about.css";
function About() {
  return (
    <div className="container">
      <div className="hero__brend">
        <div className="right__left">
          <img className="breand__img" src={BrendImg} alt="img"></img>
          <p className="breand__text">Shopify Integrated</p>
        </div>
        <div className="right__left">
          <img className="breand__img" src={BreandImg} alt="img"></img>
          <p className="breand__text">Amazon Certified</p>
        </div>
        <div className="right__left">
          <img className="breand__img" src={BarndImg} alt="img"></img>
          <p className="breand__text">Eco-Friendly</p>
        </div>
      </div>
    </div>
  );
}
export default About;
