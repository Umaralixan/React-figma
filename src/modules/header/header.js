import LogoImg from "../../assets/img/Logo.svg";
import { CratIcon } from "../../assets/icons";


import "./header.css"
function Header() {
  return (
    <header className="site-header">
      <div className="container header">
        <a className="site-logo-link" href="/">
          <img src={LogoImg} alt="Size lato" width={85} height={24}></img>
        </a>
        <nav className="header-navbar">
          <a className="nav-link" href="/">
            Start your design
          </a>
          <a className="nav-link" href="/">
            All products
          </a>
          <a className="nav-link" href="/">
            Inspiration
          </a>
          <a className="nav-link" href="/">
            About
          </a>
        </nav>
        <div className="header-right-part">
          <button className="btn-accaunt">Accaunt</button>
          <button className="btn-cart">
            <CratIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
