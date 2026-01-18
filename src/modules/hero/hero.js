import HeroImg from "../../assets/img/HeroImg.svg"



import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__div">
          <div className="hero__rght">
            <h1 className="hero__title">
              Fast and easy custom boxes your customers will love
            </h1>
            <p className="hero__text">
              Fastest turnaround. Best prices instantly. Dieline design help
              available.
            </p>
            <button className="hero__btn">Start your design</button>
          </div>
          <div className="hero__left">
            <img className="Hero__img" src={HeroImg} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
