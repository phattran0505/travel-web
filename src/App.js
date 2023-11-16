import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import video from "./assets/video/video.mp4";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import "./App.css";
function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4"></source>
      </video>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} />
      </Routes>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
