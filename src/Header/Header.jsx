import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div>
        <img src={require("./logo.png")} className="logo" alt="Логотип сайта" />
      </div>
            <div className="main__btn">
              <NavLink to="/">Главная</NavLink>
            </div>
            <div className="articles__btn">
              <NavLink to="/articles">Статьи</NavLink>
            </div>
            <div className="about-me__btn">
            <NavLink to="/about">Обо мне</NavLink>
            </div>
            <div className="search_inp">
              Поиск по сайту
            </div>
    </div>
  );
}

export default Header;
