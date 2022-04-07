import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const Carte = ({ item, index }) => {
  const { ref: card, inView, entry1 } = useInView({ threshold: 0 });
  const props = useSpring({
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : -150 },
    from: { opacity: 0, x: -150 },
    config: { friction: 20 },
  });

  return (
    <animated.div ref={card} style={props}>
      <div className="carte">
        {inView ? "yes" : "no"}, {item}
      </div>
    </animated.div>
  );
};

export default Carte;
