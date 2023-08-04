import React from "react";

function StrengthDescription(props) {
  const { item } = props;
  return (
    <div className="bg-[#fff] shadow-[0_0px_26px_-2px_#ffc60091] shadow-[#6c6a6391] relative rounded-[20px] hover:bg-[#f9f3f3] hover:delay-100 hover:duration-300 hover:ease-in-out">
      <div className="absolute text-[#fff] left-[50%] top-[-7rem] translate-x-[-50%]    ">
        {React.cloneElement(item.icon, {
          className:
            "p-[5rem] bg-[#fff] text-[#333] rounded-[50%] text-[6rem] shadow-[0_0px_15px_-5px_#ffc60091] shadow-[#6c6a6391]",
        })}
      </div>
      <p className="text-[3.5rem] text-[#333] pt-[20rem] px-[7rem] h-[70rem]">
      {item.description}
      </p>
      <div className="">
        <span className=" bg-[#f79500] py-[2rem]  w-[60%] rounded-[3rem] block text-center text-[#fff] absolute left-[50%]  bottom-[-4rem]  translate-x-[-50%]">
         {item.title}
        </span>
      
      </div>
    </div>
  );
}

export default StrengthDescription;
