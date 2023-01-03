// import logo from './logo.svg';
import Footer from "./Footer/Footer.jsx";
import "./App.css";
import Header from "./Header/Header.jsx";
import Main from "./main/Main.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./Articles/Articles.jsx";
import About from "./AbounMe/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
