import AsideImg from "../../assets/img/AsideImg.svg";

import "./aside.css";
function Aside() {
  return (
    <aside className="aside">
      <div className="container">
        <h3 className="aside__title">Merchants love Arka</h3>
        <img className="aside__img" src={AsideImg} alt="imh"></img>
        <div className="aside__btn">
          <h3 className="asideh3__title">Let`s get to it</h3>
          <div className="aside__div">
            <button className="aside__divbtn">Start your design</button>
            <button className="aside__btnn">Browse all products</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default Aside;
