import React from "react";
import PropTypes from "prop-types";

function VstepB2Intro({ listIntroduceVstepB2 }) {
  return (
    <div>
      {listIntroduceVstepB2.map((item, index) => {
        <div
          key={index}
          className="border-[2px] col-span-1 p-[4rem]  border-solid border-primaryColor mt-[20rem]"
        >
          <img
            src={item.image}
            alt=""
            className="h-[15rem] w-[15rem] mx-auto "
          />
          <p className="text-[4.5rem] text-center font-[600] py-[2rem] uppercase ">
            {item.title}
          </p>
          <span className="text-[4rem] text-center line-clamp-4 h-[25rem] block ">
            {item.content}
          </span>
        </div>;
      })}
    </div>
  );
}

export default VstepB2Intro;
