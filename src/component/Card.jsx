import React from "react";
import 'animate.css';

const Card = (props) => {
  return (
    <div className="card_div flex flex-col gap-4 p-6 border rounded-3xl min-w-[50%]
     md:w-[30%] md:min-w-[25%] md:gap-6 duration-[1500ms] ease-in-out hover:bg-custom-gradient-hover hover:scale-75">
      <h1 className="text-xl text-purple-200 animate__animated animate__pulse md:text-4xl">{props.heading}</h1>
      <div className="grid gap-2 grid-cols-3 md:grid-cols-3">
        <img src={props.img1} alt="react" className="sm:w-16 sm:h-16"/>
        <img src={props.img2} alt="tailwind" className="sm:w-16 sm:h-16" />
        <img src={props.img3} alt="javascript" className="sm:w-16 sm:h-16"/>
      </div>
      <div className={`w-full bg-gray-700 rounded-full h-3`}>
        <div className={`h-3 rounded-full ${props.p_bar} ${props.p_bar_w}`}></div>
      </div>
      <p className="text-gray-400 text-xs md:mb-4">{props.content}</p>
    </div>
  );
};

export default Card;
