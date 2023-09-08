import React from "react";

function Customers({ item }) {
  const img = "/aptisb1pic1.png";
  return (
    <>
      <div className="w-full py-[5%]  ">
        <div className="relative   ">
          <div
            className={`rounded-[20px] flex items-center text-center justify-center  text-white uppercase h-[235px] `}
            style={{
              background: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>{item.title}</h2>
          </div>
          {/* src={}
            alt="pic"
            objectFit="cover"
            className="rounded-[20px]  before:bg-black" */}

          {/* <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-opacity-50 uppercase overflow-hidden">
            
          </h2> */}
        </div>

        <div className="text-left mt-[5rem]">
          <p className="text-[4rem] font-[400] ">{item.description}</p>
        </div>
      </div>
    </>
  );
}

export default Customers;
