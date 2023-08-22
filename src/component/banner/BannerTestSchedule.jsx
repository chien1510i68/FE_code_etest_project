import { Button } from "antd";
import React from "react";

function BannerTestSchedule(props) {
  return (
    <>
      <div className="relative">
        <div className="w-[100vw] h-[60vh]">
          <img
            src="/banner_lichthi.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="block-center w-[80%]">
            <h2 className="laptop:text-[10rem] phone:text-[7rem] text-[#fff]  text-center leading-[10rem]">
              Lịch thi VSTEP của các trường được Bộ GD&DT cấp phép
            </h2>
            <p className="text-center w-1/2 mx-auto line-clamp-3 text-[#fff] my-[5%] font-[500px] text-[4.5rem]">
              Cập nhật thông tin mới nhất về lịch thi Vstep 2023. Lưu ý: Lịch
              thi tiếng anh B1, B2 Vstep tại các trường có thể thay đổi theo
              từng tháng. Quý học viên có nhu cầu đăng ký thi vui lòng cập nhật
              liên tục lịch thi tại đây!
            </p>

            <Button className="custom-btn block mx-auto">ĐĂNG KÝ TƯ VẤN</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerTestSchedule;
