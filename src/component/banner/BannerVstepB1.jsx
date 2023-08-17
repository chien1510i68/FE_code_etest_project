import { Button } from "antd";
import React from "react";

function BannerVstepB1(props) {
  return (
    <div>
      <div className="w-[100vw] h-[50vh] relative">
        <img
          src="/b1_vstep.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-[60vw] bg-[#fff4e5d6] h-full block block-center opa">
          <h2 className="text-[9rem] text-[#000000] font-[500] text-center mt-[10%] mb-[20px]">
            LUYỆN THI B1 VSTEP
          </h2>
          <p className="text-[4rem] font-[400] text-[#000000] line-clamp-4 h-[110px] px-[20%] text-center">
            VSTEP (Vietnamese Standardized Test of English Proficiency) là kỳ
            thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ (NLNN)
            6 bậc dùng cho Việt Nam (tương đương với trình độ A1, A2, B1, B2,
            C1,C2). Tiếng Anh B1 VSTEP là chứng chỉ tiếng Anh bậc 3 theo khung
            NLNN 6 bậc Việt Nam.
          </p>
          <Button className="custom-btn mx-auto block mt-[5rem] uppercase">Đăng ký tư vấn</Button>
        </div>
      </div>
    </div>
  );
}

export default BannerVstepB1;
