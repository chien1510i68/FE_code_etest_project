import Image from "next/image";
import React from "react";

function Customers({ item }) {
  return (
    <>
      <div className="w-full py-[5%]  ">
        <div className="relative bg-[#171B41/50]">
          <Image
            src={item.img}
            alt="pic"
            objectFit="cover"
            className="rounded-[20px] "
          />
          <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-opacity-50 uppercase overflow-hidden">
            {item.title}
          </h2>
        </div>

        <div className="text-left mt-[5rem]">
          <p className="text-[4rem] font-[400] ">{item.description}</p>
        </div>
      </div>
    </>
  );
}

export default Customers;
