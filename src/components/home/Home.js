import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { BsListUl } from "react-icons/bs";
import "aos/dist/aos.css";
import AOS from "aos";

import "./Home.css";
import { useEffect, useState } from "react";
function Home() {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 2000,once:true });
  }, []);
  
  return (
    <div className="home">
      <div className="home_describe">
        <h5 data-aos="fade-up">
          OUR PACKAGES
          <h1>Search your Holiday</h1>
        </h5>
      </div>

      <div data-aos="fade-up" className="book-ticket">
        <div className="book-box">
          <p>Search your destination:</p>
          <div className="input-box location">
            <input placeholder="Eter name here..."></input>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="locaiontDot-icon"
            />
          </div>
        </div>
        <div className="book-box">
          <p>Select your date:</p>
          <div className="input-box">
            <input type="date"></input>
          </div>
        </div>
        <div className="book-box">
          <p>
            max price: <span>${price}</span>
          </p>
          <div className="input-box">
            <input
              type="range"
              min="0"
              max="5000"
              step={10}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
        </div>
        <button>
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
          MORE FILTERS
        </button>
      </div>

      <div data-aos="fade-up" className="icons">
        <div className="right-icons">
          <FiFacebook className="r-icon" />
          <AiOutlineInstagram className="r-icon" />
          <FaTripadvisor className="r-icon" />
        </div>
        <div className="left-icons">
          <BsListUl className="l-icon" />
          <TbApps className="l-icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
