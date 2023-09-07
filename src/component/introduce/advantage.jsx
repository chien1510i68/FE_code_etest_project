import { Col } from "antd";
import Image from "next/image";
import React from "react";

function Advantage({ item }) {
  return (
    <div
      className="flex rounded-full items-center my-[5rem] relative col-span-1"
      style={{ backgroundColor: `${item.description}` }}
    >
      <Image
        src={item.image}
        className="border-[2rem] border-solid border-white rounded-full py-[2rem] px-[2rem] "
        alt="pic"
        height={100}
        width={100}
      />
      <h3 className="text-left px-[3rem] text-[#fff] line-clamp-2 ">
        {item.title}
      </h3>
    </div>
  );
}

export default Advantage;
