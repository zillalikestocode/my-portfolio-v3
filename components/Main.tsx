import React, { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [color, setColor]: any = useState("text-purple-500");

  useEffect(() => {
    const interval = setInterval(() => {
      const colors: [string, string, string] = [
        "text-purple-500",
        "text-fuchsia-500",
        "text-green-500",
      ];
      setColor(colors[Math.floor(Math.random() * 3)]);
    }, 1000);
    return ()=> clearInterval(interval)
  }, []);

  return (
    <div className="mt-16 md:mt-24 px-10 mb-24">
      <div className="">
        <p className="font-['D-Din'] text-lg md:text-xl tracking-[.25em]">
          HELLO THERE, I'M
        </p>
        <h4 className="font-['Mark_Pro'] mb-5 text-3xl md:text-5xl">
          emmanuel.
        </h4>
        <p
          className={`font-['Barlow_Condensed'] text-2xl mb-2 tracking-[.15em] ${color}`}
        >
          DEVELOPER & ASPIRING DESIGNER
        </p>
        <p className="font-['Circular'] text-lg md:w-[400px] md:text-xl">Web Developer and Design Enthusiast residing in Nigeria.</p>
      </div>
    </div>
  );
};

export default Main;
