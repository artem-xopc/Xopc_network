import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <div>
        <img src={require("./logo.png")} className="logo" alt="Логотип сайта" />
      </div>
            <div className="main__btn">
              Главная
            </div>
            <div className="articles__btn">
              Статьи
            </div>
            <div className="about-me__btn">
              Обо мне
            </div>
            <div className="search_inp">
              Поиск по сайту
            </div>
    </div>
  );
}

export default Header;
