import Frame from "../../assets/img/Frame.svg";
import RectangleImg from "../../assets/img/RectangleImg.svg";
import Rectangle from "../../assets/img/Rectangle.svg";
import RectangImg from "../../assets/img/RectangImg.svg";

import "./section.css";
function Section() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__div">
          <h3 className="section__titli">Products you can customize</h3>
          <button className="section__btn">Browse all products</button>
        </div>
        <img className="section__img" src={Frame} alt="img"></img>
        <div className="section__divv">
          <p className="sec__text">Need unbranded stock items?</p>
          <button className="sec__btn">Shop stock</button>
        </div>
        <div className="section__top">
          <h3 className="h3__title">
            Fast and easy custom boxes your customers will love
          </h3>
          <div className="top__dev">
            <div className="card__div">
              <img className="top__img" src={Rectangle} alt="card"></img>
              <h5 className="h5__title">You Order</h5>
              <p className="card__text">
                Design and order boxes in a few clicks.
              </p>
            </div>
            <div className="card__div">
              <img className="top__img" src={RectangleImg} alt="card"></img>
              <h5 className="h5__title">We Proof</h5>
              <p className="card__text">
                Approve your designs before production.
              </p>
            </div>
            <div className="card__div">
              <img className="top__img" src={RectangImg} alt="card"></img>
              <h5 className="h5__title">We Print & Ship</h5>
              <p className="card__text">
                Your order gets printed and shipped with tracking.
              </p>
            </div>
          </div>
          <button className="btn__top">Start your design</button>
        </div>
      </div>
    </section>
  );
}
export default Section;
