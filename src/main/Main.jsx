import './Main.css'

const Main = () => {
  return (
    <div className="main-content">
      <h1>Welcome to XNet</h1>
      <p>Здесь вы найдёте:</p>
      <ul>
        <li>Мои книги;</li>
        <li>Дневник_программиста;</li>
        <li>Моё портфолио;</li>
        <li>И многое другое;</li>
      </ul>
      <p>
        <a href="https://artem-xopc.github.io/cv/" target={"_blank"}>Моё резюме</a>
      </p>
    </div>
  );
}

export default Main;
