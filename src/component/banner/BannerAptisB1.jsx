import Image from "next/image";
import React from "react";
import { Button } from "antd";
function BannerAptisB1({ banner }) {
  return (
    <div className="bg-[#FFF4E5]">
      <div className="max-w-[1440px] mx-[auto]">
        <div className="grid tablet:grid-cols-2 items-center  tablet:mx-[10%] phone:grid-cols-1 phone:mx-0 ">
          <div className="col-span-1 phone:mx-[10%] tablet:mx-0 ">
            <div className="my-[10%]">
              <h2 className="uppercase text-[black]">{banner.title}</h2>
              <br />
              <p>{banner.description}</p>
              <div className="flex items-center">
                <Button className="custom-btn mt-[10%]  ">
                  ĐĂNG KÝ TƯ VẤN
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1  justify-center phone:hidden  tablet:flex">
            <Image src={banner.image} alt="teen" height={536} width={576} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAptisB1;
