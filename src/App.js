import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Content from "./components/content/Content";
import "./App.css";
// import { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
