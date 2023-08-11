/* eslint-disable @next/next/no-img-element */
import { Button } from "antd";
import React from "react";

function BannerVstepB2(props) {
  return (
    <div className="mt-[45px]">
      <div className="flex bg-[#FFF4E5] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] ">
        <div className="text-left border-b-[4rem] border-[#FB9400] border-solid w-1/2">
          <div className="mb-[18px]">
            <h2 className="uppercase py-auto block px-[20rem] font-[500] text-[6rem] mb-[5rem] mt-[15rem]	">
              Luyện thi b2 vstep
            </h2>
            <p
              className="font-[400] pl-[20.5rem] pr-[35rem] mb-[5rem] "

              //  className=" font-[400] text-[4rem] laptop:line-clamp-6 tablet:text-[#000000] phone:line-clamp-4 h-[55rem]  phone:text-[#fff] "
            >
              VSTEP (Vietnamese Standardized Test of English Proficiency) là kỳ
              thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ
              (NLNN) 6 bậc dùng cho Việt Nam (tương đương với trình độ A1, A2,
              B1, B2, C1,C2). Tiếng Anh B1 VSTEP là chứng chỉ tiếng Anh bậc 4
              theo khung NLNN 6 bậc Việt Nam.
            </p>
            <Button className="custom-btn  ml-[20rem] tablet:my-[2rem] text-[3rem]  tablet:uppercase">
              đăng ký tư vấn
            </Button>
          </div>
        </div>
        <div className="tablet:col-span-1  border-t-[4rem] border-[#FB9400] border-solid w-1/2 block">
          <img
            src="/b2_vstep_1.png"
            // className=""
            className="w-full object-cover opacity-90"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BannerVstepB2;
