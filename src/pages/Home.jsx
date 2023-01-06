import React from "react";
import "./createcard.scss";
import { useNavigate } from "react-router-dom";
import { cards } from "../templets/cards";
import Smcard from "../components/Smcard";
import Dashboard from "../components/Dashboard/Dashboard";
import logo from "../asset/logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <figure className="navbar__figure">
            <img src={logo} alt="" className="navbar__img" />
            <figcaption className="navbar__figcaption">Regalo!</figcaption>
          </figure>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <a
              href="#"
              className="navbar__link"
              onClick={() => navigate("/template")}
            >
              View Saved Cards
            </a>
          </li>
        </ul>
      </nav>
      <div className="home__heading">
        <h2 className="heading__2" style={{ textAlign: "center" }}>
          Generate Your Gift Card
        </h2>
      </div>
      <div className="container">
        {cards.map((card, index) => (
          <div key={index}>
            <Smcard card={card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
