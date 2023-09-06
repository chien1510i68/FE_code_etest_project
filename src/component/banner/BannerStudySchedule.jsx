import { Button } from "antd";
import Image from "next/image";
import React from "react";

function BannerStudySchedule(props) {
  return (
    <>
      <div className="relative ">
        <div
          className={`  grid grid-cols-5  text-white uppercase h-[45vh] `}
          style={{
            background: `url(/anhnguhocthuat_0.png)`,
          }}
        >
          <div className=" col-span-1 object-cover ">
            <Image src="/bannerstudy.png" alt="pic" width={340} height={472} />
          </div>
          <div className="col-span-4 flex items-center text-center justify-center">
            <div className="mx-[10%]">
              <h2 className="laptop:text-[10rem] phone:text-[7rem] text-[#fff]  text-center leading-[10rem]">
                Lịch ôn tập các chương trình đào tạo Anh ngữ
              </h2>
              <p className="text-center w-4/5 mx-auto line-clamp-3 text-[#fff] my-[5%] font-[500px] text-[4.5rem]">
                Cập nhật thông tin mới nhất về lịch ôn tập các chương trình Anh
                ngữ. Lưu ý: Lịch ôn tập có thể thay đổi theo từng tháng. Quý học
                viên có nhu cầu đăng ký học vui lòng cập nhật liên tục lịch ôn
                tập tại đây!
              </p>

              <Button className="custom-btn block mx-auto">
                ĐĂNG KÝ TƯ VẤN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerStudySchedule;
