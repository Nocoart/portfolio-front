import React from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

//assets
import background from "../../assets/img/background.jpg";
import phoneBackground from "../../assets/img/phone-background.jpg";

//styles
import "./Header.scss";

const Header = () => {
  const { height, width } = useWindowDimensions();

  return (
    <header>
      <img src={width > 426 ? background : phoneBackground} alt="header image" />
    </header>
  );
};

export default Header;
