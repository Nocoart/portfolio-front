import React from "react";
import { Link } from "react-router-dom";

//styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home">
      <h1>
        Nicolas <span>g</span>uerineau
      </h1>
      <Link to="/about">{`{`}</Link>
    </div>
  );
};

export default Home;
