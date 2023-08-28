import Image from "next/image";
import React from "react";
import pic from "public/aptis-b2.png";
import { Button } from "antd";
function Intro(props) {
  return (
    <div className="bg-[#FFF4E5]">
      <div className="max-w-[1440px] mx-[auto]">
        <div className="grid tablet:grid-cols-2 items-center  tablet:mx-[10%] phone:grid-cols-1 phone:mx-0 ">
          <div className="col-span-1  justify-center phone:hidden  tablet:flex">
            <div className="after:absolute after:h-[30%] relative after:w-[20%] after:top-[-10px] after:left-[-10px] after:bg-[#FB9400] after:z-5  before:absolute before:h-[30%] before:w-[20%] before:bottom-[-10px] before:right-[-10px] before:bg-[#FB9400] before:z-5">
              <Image
                src={pic}
                alt="pic"
                className="z-10 object-cover relative "
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mx-[10%] my-[10%] ">
              <h2 className="uppercase text-[black]">luyện thi aptis b2</h2>
              <br />
              <p>
                Tại Việt Nam, chứng chỉ ngoại ngữ trình độ APTIS B2 được sử dụng
                để làm tiêu chuẩn đầu vào của giáo viên tiếng anh, chuyên viên,
                giảng viên hoặc nghiên cứu sinh tại các trường đại học… Về cơ
                bản, nếu đạt trình độ APTIS B2, người học có thể giao tiếp ở mức
                độ trôi chảy và lưu loát như người bản địa.
              </p>
              <div className="flex items-center">
                <Button className="custom-btn mt-[10%]  ">
                  ĐĂNG KÝ TƯ VẤN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
