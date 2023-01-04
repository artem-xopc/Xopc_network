// import logo from './logo.svg';
import Footer from "./components/Footer/Footer"
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import About from "./components/AbounMe/About";

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
