import "./Articles.css";
import Likes from "../Like/Like.jsx"

const Articles = () => {
  return (
    <div className="articles__main">
      <h1>Новости из мира IT, статьи и прочее</h1>
      <div className="articles__content">
        <p>Статья 1. Синтаксис в JavaScript</p>
        <Likes />
      </div>
      <div className="articles__content"></div>
      <div className="articles__content"></div>
      <div className="articles__content"></div>
    </div>
  );
};

export default Articles;
