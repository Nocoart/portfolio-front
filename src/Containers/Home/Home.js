import React from "react";
import { Link } from "react-router-dom";
import Sandbox from "../../Components/Sandbox/Sandbox";

//hooks
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import colorText from "../../Utils/GetColors";

//assets
import background from "../../assets/img/background.jpg";
import phoneBackground from "../../assets/img/phone-background.jpg";

//styles
import "./Home.scss";

const Home = () => {
  const { height, width } = useWindowDimensions();
  const welcome = "Welcome";
  const name = "I'm \n Nicolas Guerineau";
  const subtitle = "Full stack developper";

  return (
    <div className="container home">
      <header>
        <img src={width > 426 ? background : phoneBackground} alt="header image" />
        <div className="center">
          <h1 className="title">{colorText(welcome)}</h1>
          <h1 className="title">{colorText(name)}</h1>
          <p className="subtitle">{colorText(subtitle)}</p>
        </div>
      </header>

      <Link to="/about">{`{`}</Link>
    </div>
  );
};

export default Home;
