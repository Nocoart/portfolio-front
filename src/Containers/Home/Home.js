import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

//styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home">
      <Header />
      <h1>
        Nicolas <span className="pink">G</span>uerineau
      </h1>
      <Link to="/about">{`{`}</Link>
    </div>
  );
};

export default Home;
