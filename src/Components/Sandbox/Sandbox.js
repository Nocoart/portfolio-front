import React, { useRef, useState, useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";
import { gsap, TweenMax, Power3 } from "gsap";
import "./Sandbox.scss";

const Sandbox = () => {
  const header = useRef(null);
  const refleft = useRef(null);

  const { ref: card1, inView: cardInView1, entry1 } = useInView({ threshold: 1 });
  const { ref: card2, inView: cardInView2, entry2 } = useInView({ threshold: 1 });

  useEffect(() => {
    gsap.to(header.current, { color: "red", duration: 2 });
  }, []);

  return (
    <div>
      <h1 ref={header} style={{ fontSize: "40px", fontFamily: "Game Of Squids" }}>
        TITLE
      </h1>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte" ref={card1}>
        {`carte observed ${cardInView1 ? "yes" : "no"}`}
      </div>
      <div className="carte" ref={card2}>
        {`carte observed ${cardInView2 ? "yes" : "no"}`}
      </div>

      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>
      <div className="carte">carte</div>

      {/* <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refright}>
        {`carte ${inView}`}
      </div>
      <div className="carte" ref={refleft}>
        {`carte ${inView}`}
      </div> */}
    </div>
  );
};

export default Sandbox;
