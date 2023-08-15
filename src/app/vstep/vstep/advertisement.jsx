import React from "react";
import Image from "next/image";

function Advertisement({ value, index }) {
  console.log("object", index);
  return (
    <>
      <div
        className={`grid grid-cols-2 items-center h-[82.5rem]  my-[10rem]  shadow-lg overflow-hidden rounded-[8px] `}
      >
        {index === 1 ? (
          <>
            <div className="col-span-1  ">
              <div className=" w-[auto] h-[82.5rem] relative">
                <Image
                  src={value.pic}
                  alt="pic"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="uppercase text-[5rem] px-[5rem] font-[700]">
                {value.title}
              </h2>
              <p className="px-[5rem] tablet:text-[16px] phone:text-[12px]">
                {value.content}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-1">
              <h2 className="uppercase text-[5rem] px-[5rem] font-[700]">
                {value.title}
              </h2>
              <p className="px-[5rem] tablet:text-[16px] phone:text-[12px]">
                {value.content}
              </p>
            </div>
            <div className="col-span-1  ">
              <div className=" w-[auto] h-[82.5rem] relative">
                <Image
                  src={value.pic}
                  alt="pic"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Advertisement;
