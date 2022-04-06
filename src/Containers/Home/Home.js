import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sandbox from "../../Components/Sandbox/Sandbox";

//styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home">
      <Sandbox />
      {/* <Header />
      <h1>
        Nicolas <span className="pink">G</span>uerineau
      </h1>
      <Link to="/about">{`{`}</Link> */}
    </div>
  );
};

export default Home;
