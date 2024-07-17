import { useEffect, useState } from "react";
import { IoMdPaperPlane } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FaTwitter, FaYoutube, FaTripadvisor } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

import "aos/dist/aos.css";
import AOS from "aos";

import "./Footer.css";
function Footer() {
  const [filled, setFilled] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 2000,once:true });
  }, []);
  return (
    <footer>
      <div className="email-box">
        <p data-aos="fade-up">
          keep in touch <br></br> <h3>Travel with us</h3>
        </p>
        <input
          data-aos="fade-up"
          placeholder="Enter Email Address"
          onChange={(e) => setFilled(e.target.value)}
          style={
            filled.length === 0
              ? { background: "transparent" }
              : { background: "#e9f0fe", color: "#000" }
          }
        ></input>
        <button data-aos="fade-up">
          send
          <IoMdPaperPlane />
        </button>
      </div>
      <div className="footer-card">
        <div className="footer-card_content">
          <div className="company-info">
            <div className="company-logo" data-aos="fade-right">
              <FontAwesomeIcon icon={faGlobe} className="logo" />
              <span>Travel.</span>
            </div>
            <div className="company-detail" data-aos="fade-up">
              Lorem ipsum dolor sit amet. Quo nostrum asperiores et veniam sunt
              et dignissimos reprehenderit qui nihil temporibus. Ex voluptas
              aperiam et Lorem ipsum dolor sit amet. Quo nostrum asperiores
              dignissimos reprehenderit qui nihil temporibus. Ex voluptas
              aperiam et Lorem ipsum dolor sit amet. Quo nostrum asperiores
            </div>
            <div className="company-icons" data-aos="fade-up">
              <FaTwitter className="company-icon" />
              <FaYoutube className="company-icon" />
              <AiFillInstagram className="company-icon" />
              <FaTripadvisor className="company-icon" />
            </div>
          </div>
          <div className="options" data-aos="fade-up">
            <ul className="col">
              <p className="col-header">our agency</p>
              <li>
                <BiChevronRight />
                <span>services</span>
              </li>
              <li>
                <BiChevronRight />
                <span>insurance</span>
              </li>
              <li>
                <BiChevronRight />
                <span>agency</span>
              </li>
              <li>
                <BiChevronRight />
                <span>tourism</span>
              </li>
              <li>
                <BiChevronRight />
                <span>payment</span>
              </li>
            </ul>
            <ul className="col">
              <p className="col-header">partners</p>
              <li>
                <BiChevronRight />
                <span>booking</span>
              </li>
              <li>
                <BiChevronRight />
                <span>rentalcar</span>
              </li>
              <li>
                <BiChevronRight />
                <span>hostelworld</span>
              </li>
              <li>
                <BiChevronRight />
                <span>trivago</span>
              </li>
              <li>
                <BiChevronRight />
                <span>tripadvisor</span>
              </li>
            </ul>
            <ul className="col">
              <p className="col-header">last minute</p>
              <li>
                <BiChevronRight />
                <span>london</span>
              </li>
              <li>
                <BiChevronRight />
                <span>california</span>
              </li>
              <li>
                <BiChevronRight />
                <span>indonesia</span>
              </li>
              <li>
                <BiChevronRight />
                <span>europe</span>
              </li>
              <li>
                <BiChevronRight />
                <span>oceania</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-slogan">
          <p>best travel website theme</p>
          <p>copyrights reserved - isratech 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
