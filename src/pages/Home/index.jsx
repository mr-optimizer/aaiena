import React from "react";
import "./style.css";
import AnnouncementCard from "../../components/AnnouncementCard/card";
import Card from "../../components/Card/card";

let announcements = [
  {
    src: "/images/Image2.png",
    title: "MEET AND GREET NORMAN ORNELAS",
    text: "Award-winning poet Norman Ornelas is dropping by on March 10, 7 PM. Hewill be reading from his new collection,Spring, and signing copies. Buy ticketsnow!",
  },
  {
    src: "/images/Image3.png",
    title: "SITE RENOVATION",
    text: "We will be closed for the whole month of September for store renovations. We are excited to welcome you to a bigger and more updated space.",
  },
  {
    src: "/images/Image4.png",
    title: "WE'RE HIRING",
    text: "We are looking for full-time and part-time staff. If you're passionate about books, apply here!",
  },
];

let newArrivals = [
  {
    src: "/images/Image5.png",
    title: "SHIRT",
  },
  {
    src: "/images/Image6.png",
    title: "POLO T-SHIRT",
  },
  {
    src: "/images/Image7.png",
    title: "T-SHIRT",
  },
];

let features = [
  {
    src: "/images/Image9.png",
    title: "Accurate Sizing",
  },
  {
    src: "/images/Image10.png",
    title: "360 DEGREE PRODUCT VIEW",
  },
  {
    src: "/images/Image11.png",
    title: "3D ECOMMERCE",
  },
  {
    src: "/images/Image12.png",
    title: "VIRTUAL TRIAL ROOM",
  }
];
const Home = () => {
  return (
    <div>
      <nav className="nav_bar">
        <img
          className="nav_logo"
          src="/images/Aaiena-removebg-preview.png"
          alt="logo"
        />
        <ul className="nav_list">
          <li className="nav_list_item">
            <a href="#hero">Home</a>
          </li>
          <li className="nav_list_item">
            <a href="#announcement">Sale</a>
          </li>
          <li className="nav_list_item">
            <a href="#new_arrival">Casual Shirt</a>
          </li>
          <li className="nav_list_item">
            <a href="#features">Ethnic</a>
          </li>
          <li className="nav_list_item">
            <a href="#features">Sportswear</a>
          </li>
        </ul>
      </nav>
      <section className="hero_section" id="hero">
        <img
          className="down_arrow"
          src="/images/extras/down-arrow.png"
          alt="down arrow"
        ></img>
      </section>
      <section className="announcement_section" id="announcement">
        <h2 className="header_primary">Announcement</h2>
        <div className="card_container">
          {announcements.map((item, index) => (
            <AnnouncementCard
              src={item.src}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>
      <section className="new_arrival_section" id="new_arrival">
        <h2 className="header_primary">New Arrival</h2>
        <div className="card_container">
          {newArrivals.map((item, index) => (
            <Card src={item.src} title={item.title} />
          ))}
        </div>
      </section>
      <section className="features_section" id="features">
        <div className="features_left">
          <img className="features_left_img" src="/images/Image8.png" alt="features"/>
        </div>
        <div className="features_right">
            {features.map((item, index) => (
              <Card src={item.src} title={item.title} isSmall={true} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
