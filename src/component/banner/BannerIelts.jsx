import { Button } from "antd";
import React from "react";

function BannerIelts(props) {
  return (
    <div className="grid gap-12 tablet:grid-cols-2 ">
      <div  className="col-span-1 max-h-[500px] phone:hidden tablet:block">
        <img src="/16 (1).jpg" className="w-full h-full object-cover " alt="" />
      </div>
      <div className="bg-[#FFF4E5] pt-[25rem] col-span-1 " >
        <h2 className="py-auto block px-[20rem] font-[500] text-[8rem]">
          LUYỆN THI IELTS
        </h2>
        <p className="py-auto block px-[20rem] font-[400] text-[4rem]">
          IELTS (International English Language Testing System) là kỳ thi quốc
          tế đánh giá khả năng sử dụng tiếng Anh cho học sinh ở các nước không
          sử dụng tiếng Anh như ngôn ngữ mẹ đẻ. Cho đến nay, IELTS đã được chấp
          nhận bởi hơn 7000 tổ chức bao gồm các trường đại học, các công ty đa
          quốc gia trên thế giới.
        </p>
        <Button className="ml-auto block mt-[10rem] mr-[20rem] bg-[#FB9400] shadow-md hover:scale-[1.1] text-[#fff] hover:border-none border-none ">
          {" "}
          Đăng ký tư vấn
        </Button>
      </div>
    </div>
  );
}

export default BannerIelts;
