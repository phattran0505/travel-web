import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineClipboardList } from "react-icons/hi";
import "aos/dist/aos.css";
import AOS from "aos";

import pic1 from "../../assets/image/new-zealand.jpg";
import pic2 from "../../assets/image/peru.jpg";
import pic3 from "../../assets/image/austrailia.jpg";
import pic4 from "../../assets/image/destination 1.jpg";

import "./Main.css";
function Main() {
  const data = [
    {
      id: 1,
      src: pic1,
      desTitle: "Bora Bora",
      location: "new zealand",
      grade: "cultural relax",
      price: "$700",
      description:
        "the epitome of romance, Bora Bora is one of the best travel destination in the world. This is place is known for its luxurious stays and adventurious activities.",
    },
    {
      id: 2,
      src: pic2,
      desTitle: "Machu Picchu",
      location: "peru",
      grade: "cultural relax",
      price: "$600",
      description:
        "Huayna Picchu is a mountain in Peru, rising over Machu Piccu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.",
    },
    {
      id: 3,
      src: pic3,
      desTitle: "great barrier reef",
      location: "austraila",
      grade: "cultural relax",
      price: "$700",
      description:
        "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place.",
    },
    {
      id: 4,
      src: pic4,
      desTitle: "cappadocia",
      location: "turkey",
      grade: "cultural relax",
      price: "$800",
      description:
        "According to the World Tourism Ranking, 45 million people visist Turkey each year, and from that about 2 million come to visit cappadocia. This place is known for its luxurious stays and adventurous activities",
    },
    {
      id: 5,
      src: pic1,
      desTitle: "cinque terre",
      location: "italy",
      grade: "cultural relax",
      price: "$1000",
      description:
        "the vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and lvoe seafood, you will be exhilarated with the choice you are about to get here. Happly exploring great food! ",
    },
    {
      id: 6,
      src: pic3,
      desTitle: "guanajuato",
      location: "mexicon",
      grade: "cultural relax",
      price: "$1200",
      description:
        "A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. ",
    },
    {
      id: 7,
      src: pic3,
      desTitle: "angkor wat",
      location: "campodia",
      grade: "cultural relax",
      price: "$500",
      description:
        "Angkor Wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.",
    },
    {
      id: 8,
      src: pic4,
      desTitle: "taj mahal",
      location: "india",
      grade: "cultural relax",
      price: "$700",
      description:
        "An immense manusoleum of white marble, builte-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument os breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.",
    },
    {
      id: 9,
      src: pic1,
      desTitle: "bali island",
      location: "indonesia",
      grade: "cultural relax",
      price: "$1500",
      description:
        "Bali is and Indonesian Island and one of the best holiday destinations in the Indonesian archipelango. Bali is known for its volcanic moutains, history, art and culture, food, tepmples, and beautiful sandy beaches",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <main>
      <h1 data-aos="fade-right" className="main-title">
        Most visited destinations
      </h1>
      <div className="main-content">
        {data.map((item) => {
          return (
            <Link
              to={`/destination/${item.id}`}
              data-aos="fade-up"
              className="destination-box"
              key={item.id}
            >
              <div className="destination-img">
                <img src={item.src} alt="no-pics"></img>
              </div>
              <div className="destination-content">
                <div className="destination-name">
                  <h3>{item.desTitle}</h3>
                  <div className="destination">
                    <LuMapPin />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="destination-price">
                  <p className="destination-rate">
                    {item.grade} <span>+1</span>
                  </p>
                  <h1>{item.price}</h1>
                </div>
                <div className="destination-info">
                  <p>{item.description}</p>
                  <button>
                    details
                    <HiOutlineClipboardList />
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
