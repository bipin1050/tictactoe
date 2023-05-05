import React, { useEffect, useState } from 'react';
import Confetti from "react-confetti";

const Celebrate = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

  return (
    <div className="w-[75%] m-auto h-full absolute left-[50px] top-0">
      <Confetti
        width={width-100}
        height={height-100}
        numberOfPieces={1000}
        recycle={false}
        colors={["#ffffff", "#f6d365", "#fda085", "#ebebfa", "#ff1e56"]}
      />
    </div>
  );
}

export default Celebrate