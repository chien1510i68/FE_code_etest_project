import { Col, Row } from "antd";
import React from "react";

function IeltsIntro(props) {
  const { listIntroduceIelts } = props;
  return (
    <div className="px-96 grid gap-24 tablet:grid-cols-3 phone:grid-cols-2 justify-between ">
      {listIntroduceIelts.map((item, index) => (
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
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}

export default IeltsIntro;
