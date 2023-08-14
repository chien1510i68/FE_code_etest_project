import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

function BannerVstepB2(props) {
  return (
    <div className="flex bg-[#FFF4E5] ">
      <div>
        <h1 className="uppercase py-auto mt-[25rem] text-center font-[500] text-[8rem]">
          Luyện thi b2 vstep
        </h1>
        <p className="leading-[9rem] font-[400]">
          VSTEP (Vietnamese Standardized Test of English Proficiency) là kỳ thi
          đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ (NLNN) 6 bậc
          dùng cho Việt Nam (tương đương với trình độ A1, A2, B1, B2, C1,C2).
          Tiếng Anh B1 VSTEP là chứng chỉ tiếng Anh bậc 4 theo khung NLNN 6 bậc
          Việt Nam.
        </p>
        <Button className="uppercase custom-btn mt-[2rem]">
          đăng ký tư vấn
        </Button>
      </div>
      <div>
        <img src="/banner_b2_vstep.png" alt="" />
      </div>
    </div>
  );
}

export default BannerVstepB2;
