import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import pic from "../../assets/img/profil-pic.svg";

import Carte from "./Carte";

import "./Sandbox.scss";
const arrayLength = 30;
const array = [];

for (let i = 0; i < arrayLength; i++) {
  array.push(`card number ${i}`);
}

const Sandbox = () => {
  const header = useRef(null);
  const refleft = useRef(null);

  const { ref: card1, inView: cardInView1, entry1 } = useInView({ threshold: 1 });
  const { ref: card2, inView: cardInView2, entry2 } = useInView({ threshold: 1 });

  return (
    <div>
      {array.map((item, index) => (
        <Carte item={item} key={index} index={index} />
      ))}
    </div>
  );
};

export default Sandbox;
