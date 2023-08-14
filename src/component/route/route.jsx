import { Col, Row } from "antd";
import React from "react";

function Route({ item }) {
  return (
    <div className="mx-auto h-[25rem] my-[5rem] shadow-md hover:opacity-90 cursor-pointer grid  grid-cols-10 gap-0">
      <div className="bg-primaryColor relative  col-span-2 block">
        <h2 className="text-[#fff] font-[600] tablet:text-[5.5rem]  block-center ">
          {item.step}
        </h2>
      </div>
      <div className="  block relative phone:col-span-7 laptop:col-span-9">
        <div className="absolute top-[50%] translate-y-[-50%] px-[5rem] phone: py-[3rem] ">
          <h3 className="text-[4.5rem] phone:leading-tight font-[500]">
            {item.title}
          </h3>
          <p className="text-[4rem] fontt-[400]  phone:leading-tight phone:text-[3.5rem]">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Route;
