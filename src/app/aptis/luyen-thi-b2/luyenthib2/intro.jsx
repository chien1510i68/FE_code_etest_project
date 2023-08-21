import Image from "next/image";
import React from "react";
import pic from "public/aptis-b2.png";
function Intro(props) {
  return (
    <div className="bg-[#FFF4E5]">
      <div className="grid grid-cols-2 items-center   h-[450px] mx-[10%] ">
        <div className="col-span-1 flex justify-center relative">
          <div className="after:absolute after:h-[30%] after:w-[20%] after:top-[-10px] after:left-[-10px] after:bg-[#FB9400] after:z-5  before:absolute before:h-[30%] before:w-[20%] before:bottom-[-10px] before:right-[-10px] before:bg-[#FB9400] before:z-5">
            <Image
              src={pic}
              alt="pic"
              className="z-10 object-cover relative "
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="ml-[20rem]">
            <h2 className="uppercase text-[black]">luyện thi aptis b2</h2>
            <br />
            <p>
              Tại Việt Nam, chứng chỉ ngoại ngữ trình độ APTIS B2 được sử dụng
              để làm tiêu chuẩn đầu vào của giáo viên tiếng anh, chuyên viên,
              giảng viên hoặc nghiên cứu sinh tại các trường đại học… Về cơ bản,
              nếu đạt trình độ APTIS B2, người học có thể giao tiếp ở mức độ
              trôi chảy và lưu loát như người bản địa.
            </p>
            <button className="block laptop:h-[40px] laptop:w-[140px] rounded-[8px] bg-white text-[#FE9400] font-bold laptop:text-[15px] laptop:mx-auto laptop:mt-[30px] uppercase custom-btn tablet:mt-[50px] phone:text-[12px] h-[30px] w-[120px] mt-[1rem] ml-0 ">
              ĐĂNG KÝ TƯ VẤN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
