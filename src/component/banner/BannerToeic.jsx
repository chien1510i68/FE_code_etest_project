/* eslint-disable @next/next/no-img-element */
// "use server"
import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";

function BannerToeic({ banner }) {
  return banner.map((item) => (
    <>
      <div
        key={1}
        className="border-b-[2rem] border-b-solid border-b-primaryColor grid  tablet:grid-cols-2 phone:grid-cols-1 "
      >
        <div className=" col-span-1  tablet:block phone:hidden border-r-[2rem] border-r-solid border-r-primaryColor">
          <Image
            src={item.image}
            className=" object-cover "
            alt=""
            width={728}
            height={444}
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
            <Button className="ml-auto block my-[5%]  bg-[#FB9400] shadow-md hover:scale-[1.1] text-[#fff] hover:border-none border-none ">
              {" "}
              Đăng ký tư vấn
            </Button>
          </div>
        </div>
      </div>
    </>
  ));
}
export default BannerToeic;
