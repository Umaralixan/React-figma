import Frame from "../../assets/img/Frame.svg"

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
      </div>
    </section>
  );
}
export default Section;
