import Home from "../home/Home";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import video from "../../assets/video/video.mp4";

import "./Content.css"
function Content() {
  return (
    <div className="content">
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4"></source>
      </video>
      <Home />
      <Main />
      <Footer/>
    </div>
  );
}

export default Content;
