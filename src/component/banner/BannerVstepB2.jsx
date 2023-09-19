import React from "react";
import { Button } from "antd";

function BannerVstepB2({ banner }) {
  return (
    <div className=" bg-[#FFF4E5] grid grid-cols-2 ">
      <div className=" phone:col-span-2 px-[10%]  laptop:col-span-1">
        <h1 className="uppercase py-auto   text-center font-[500] text-[8rem] mt-[10%] mb-[5%]">
          {banner.title}
        </h1>
        <p className="leading-[9rem] font-[400]">{banner.description}</p>
        <div className="flex justify-center">
          <Button className="uppercase  custom-btn  mt-[5%] mb-[10%]">
            đăng ký tư vấn
          </Button>
        </div>
      </div>
      <div className=" laptop:col-span-1 hidden laptop:block ">
        <img src={banner.image} alt="" />
      </div>
    </div>
  );
}

export default BannerVstepB2;
