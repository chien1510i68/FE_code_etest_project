// "use server"
import { Button, Col, Row } from "antd";
import React from "react";

function BannerToeic(props) {
  return (
    <div className="mt-[45px]">
      <div className="tablet:border-b-[2rem] tablet:border-b-solid tablet:border-b-primaryColor h-[105rem] grid phone:grid-cols-1 tablet:grid-cols-2 ">
        <div className="tablet:col-span-1  block">
          <img src="/ctr_5.jpg" className="w-full h-full object-cover tablet:border-r-[2rem] tablet:border-r-solid tablet:border-r-primaryColor opacity-90" alt="" />
        </div>
        <div className="tablet:bg-[#FFF4E5] phone:bg-[#fb940000] text-left relative col-span-1 " >
          <div className="tablet:translate-y-[-50%] absolute top-[50%] left-[50%] translate-x-[-50%]  phone:translate-y-[-110%] left-[40%]">
            <h2 className="font-[500] laptop:text-[8rem] tablet:text-[6rem] tablet:text-[#000000]  phone:text-[#fff] ">Luyện thi toeic</h2>
            <p className=" font-[400] text-[4rem] laptop:line-clamp-6 tablet:text-[#000000] phone:line-clamp-4 h-[55rem]  phone:text-[#fff] ">
              TOEIC (Test of English for International Communication) – Bài kiểm
              tra tiếng Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc
              tế về giao tiếp dành cho người đi làm không phải là người sử dụng
              tiếng Anh làm tiếng mẹ đẻ, đặc biệt là những đối tượng muốn sử
              dụng tiếng Anh trong môi trường giao tiếp và làm việc quốc tế.
            </p>
            <Button className="custom-btn tablet:my-[2rem] text-[3rem]  tablet:uppercase">đăng ký tư vấn</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerToeic;
