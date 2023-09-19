import React from "react";

function StrengthDescription(props) {
  const { item } = props;
  console.log("object iutem", item);
  return (
    <div className="bg-[#fff] h-[60rem] shadow-[0_0px_26px_-2px_#ffc60091] shadow-[#6c6a6391] relative rounded-[20px] hover:bg-[#f9f3f3] hover:delay-50 hover:duration-300 hover:ease-in-out">
      <div className="absolute text-[#fff] left-[50%] top-[-7rem] translate-x-[-50%]    ">
        {/* {React.cloneElement(item.image, {
          className:
            "p-[5rem] bg-[#fff] text-[#333] rounded-[50%] text-[6rem] shadow-[0_0px_15px_-5px_#ffc60091] shadow-[#6c6a6391]",
        })} */}
      </div>
      <p className="text-[3.5rem] line-clamp-5 text-[#333] pt-[20rem] px-[7rem] sm:h- md:h-[45rem]">
        {item.description}
      </p>
      <div className="">
        <span className=" line-clamp-1 h-[9rem] bg-[#f79500] py-[2rem] text-[4rem] md:text-[3.2rem] w-[60%] rounded-[3rem] block text-center text-[#fff] absolute left-[50%]  bottom-[-4rem]  translate-x-[-50%]">
          {item.title}
        </span>
      </div>
    </div>
  );
}

export default StrengthDescription;
