import './Main.css'

const Main = () => {
  return (
    <div className="main-content">
      <h1>Welcome to XNet</h1>
      <p>Здесь вы найдёте:</p>
      <div>Мои книги</div>
      <div>Статьи по JavaScript</div>
      <div>Новости из мира IT</div>
      <div>И многое другое</div>
      <p>
        <a href="https://artem-xopc.github.io/cv/" target={"_blank"} rel="noreferrer">Моё резюме</a>
      </p>
    </div>
  );
}

export default Main;
