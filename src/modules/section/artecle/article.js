import ArticleImg from "../../../assets/img/ArticleImg.svg";
import ArticleImg2 from "../../../assets/img/ArticleImg2.svg";
import ArticleImg3 from "../../../assets/img/ArticleImg3.svg";
import ArticleImg4 from "../../../assets/img/ArticleImg4.svg";
import ArticleImg5 from "../../../assets/img/ArticleImg5.svg";


import "./article.css";
function Article() {
  return (
    <article className="article__div">
      <div className="container">
        <h4 className="article__title">The Arka advantage</h4>
        <div className="article__cards">
          <div className="article__card">
            <img className="article__img" src={ArticleImg} alt=""></img>
            <h6 className="card__title">Eco-Friendly Material</h6>
            <p className="cardd__text">
              Order as little as 10, giving you the lowest minimums in the
              industry at the best prices.
            </p>
          </div>
          <div className="article__card">
            <img className="article__img" src={ArticleImg2} alt=""></img>
            <h6 className="card__title">Full Outside Print</h6>
            <p className="cardd__text">
              Design what you want - no extra cost! Prices include 100% exterior
              print, change design whenever!
            </p>
          </div>
          <div className="article__card">
            <img className="article__img" src={ArticleImg3} alt=""></img>
            <h6 className="card__title">Proofing</h6>
            <p className="cardd__text">
              After you order, our internal designers help make sure your
              designs are 100% ready for printing!
            </p>
          </div>
        </div>
        <div className="article">
          <div className="article__bg">
            <img className="bg__img" src={ArticleImg4} alt=""></img>
            <h5 className="title__bg">Couldn't find a size you need?</h5>
            <p className="text__bg">
              We’ll work directly with you to create a fully branded packaging
              system.
            </p>
            <button className="bg__btn">Request a quote</button>
          </div>
          <div className="article__bg">
            <img className="bg__img" src={ArticleImg5} alt=""></img>
            <h5 className="title__bg">Need a free dieline template?</h5>
            <p className="text__bg">
              Let us know what size you need and we'll email an Adobe
              Illustrator dieline to you within 3-4 business days.
            </p>
            <button className="bg__btn">Request dieline</button>
          </div>
        </div>
      </div>
    </article>
  );
}
export default Article;
