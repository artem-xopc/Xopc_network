import './Main.css'

function Main() {
  return (
    <div className="main-content">
       <div>
        <p>Я без понятия, как вы сюда попали, но добро пожаловать!</p>
      </div>
      <h1>Welcome to Xopc Network</h1>
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
