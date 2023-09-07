import { Button } from "antd";
import Image from "next/image";
import React from "react";

function BannerIelts({ banner }) {
  // console.log("banner", banner);
  return banner.map((item) => (
    // console.log(" itemmm", item);
    <div key={1} className="grid tablet:grid-cols-2 phone:grid-col-1 ">
      <div className="col-span-1 max-h-[500px] phone: tablet:block">
        <Image
          src={item.image}
          className="w-full h-full object-cover "
          alt="pic"
          width={724}
          height={462}
        />
      </div>

      <div className="col-span-1 ">
        <div className="bg-[#FFF4E5] pt-[10%] px-[10%]  h-full ">
          <h2 className="pb-[5rem] block  font-[500] text-[8rem]">
            {item.title}
          </h2>
          <p className="py-auto block  font-[400] text-[4rem]">
            {item.description}
          </p>
          <Button className="ml-auto block my-[5%] mr-[20rem] bg-[#FB9400] shadow-md hover:scale-[1.1] text-[#fff] hover:border-none border-none ">
            {" "}
            Đăng ký tư vấn
          </Button>
        </div>
      </div>
    </div>
  ));
}

export default BannerIelts;
