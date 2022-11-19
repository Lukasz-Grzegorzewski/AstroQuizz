import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

// import ufo from "../assets/images/ufo.svg"

function GeneralStars() {
  const [stars, setStars] = useState([]);
  const [width, height] = useWindowSize();

  useEffect(() => {
    const tabTmp = [];
    for (let i = 0; i < 800; i += 1) {
      tabTmp.push({
        id: i,
        left: Math.floor(Math.random() * width),
        top: Math.floor(Math.random() * height),
        size: Math.random() * 3,
        duration: Math.random() * 10 + 10,
      });
    }
    setStars(tabTmp);
  }, [width, height]);

  return (
    <div className="general-background">
      <div className="background">
        <svg
          width="69"
          height="40"
          viewBox="0 0 69 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.2367 8.77421C67.7628 13.62 54.791 22.5743 37.2633 28.7741C19.7355 34.974 4.28937 36.0716 2.76326 31.2258C1.23715 26.38 14.209 17.4257 31.7367 11.2259C49.2645 5.02604 64.7106 3.92839 66.2367 8.77421Z"
            fill="#A3A3A3"
          />
          <ellipse
            rx="1.95151"
            ry="2.04421"
            transform="matrix(0.942761 -0.33347 0.300388 0.953817 11.9624 27.9719)"
            fill="#D9D9D9"
          />
          <ellipse
            rx="1.95151"
            ry="2.04421"
            transform="matrix(0.942761 -0.33347 0.300388 0.953817 56.1174 12.3532)"
            fill="#D9D9D9"
          />
          <ellipse
            rx="1.95151"
            ry="2.04421"
            transform="matrix(0.942761 -0.33347 0.300388 0.953817 34.9609 23.0874)"
            fill="#D9D9D9"
          />
          <path
            d="M44.9361 10.891C45.0158 11.1441 44.9378 11.6097 44.465 12.3122C44.0106 12.9876 43.2628 13.7716 42.2548 14.5915C40.243 16.2281 37.2677 17.9492 33.7602 19.1898C30.2516 20.4309 26.781 20.9895 24.1861 20.9813C22.8843 20.9773 21.834 20.8305 21.117 20.5761C20.3631 20.3085 20.1589 19.9959 20.1435 19.7836C20.1158 19.405 20.2841 18.7566 20.7415 17.9054C21.1883 17.0739 21.8774 16.1115 22.7967 15.1273C24.6348 13.1595 27.3643 11.1355 30.8368 9.90718C34.3113 8.67818 37.7575 8.5189 40.401 8.90287C41.7236 9.09498 42.8288 9.4207 43.628 9.8041C44.0278 9.99585 44.3391 10.1964 44.5612 10.3921C44.7865 10.5906 44.8956 10.7625 44.9361 10.891Z"
            fill="#D9D9D9"
            stroke="#9C9C9C"
          />
        </svg>
        {stars.map((star) => {
          return (
            <div
              key={star.id}
              className="stars"
              style={{
                position: "absolute",
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDuration: `${star.duration}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GeneralStars;
