import { list } from "postcss";
import React from "react";
import star from "public/Rating.svg";
import Image from "next/image";
function Advertisement({ value }) {
  return (
    <>
      <div className="h-[81rem] bg-[#FFF4E5]  shadow-md rounded-[5px]">
        <div className="p-[6rem] mt-[3rem]">
          <Image src={star} height={17} width={130} alt="rating" />

          <div className="text-[6rem] font-bold my-[5rem]">
            {value.title} {value.icon}
          </div>
          <p>{value.content}</p>
        </div>
      </div>
    </>
  );
}

export default Advertisement;
