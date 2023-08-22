import Image from "next/image";
import React from "react";
import teen from "/public/aptisb1header.svg";
import { Button } from "antd";
function IntroduceAptisB1(props) {
  return (
    <div className="bg-[#FFF4E5]">
      <div className="max-w-[1440px] mx-[auto]">
        <div className="grid tablet:grid-cols-2 items-center  tablet:mx-[10%] phone:grid-cols-1 phone:mx-0 ">
          <div className="col-span-1 phone:mx-[10%] tablet:mx-0 ">
            <div className="my-[10%]">
              <h2 className="uppercase text-[black]">luyện thi aptis b1</h2>
              <br />
              <p>
                APTIS B1 là bài thi APTIS được quy đổi điểm theo khung tham
                chiếu châu Âu. Bài thi APTIS là bài thi đánh giá năng lực ngoại
                ngữ trên máy tính được nghiên cứu và phát triển bởi Hội đồng
                Anh. <br></br> APTIS đánh giá chính xác trình độ của thí sinh
                thông qua 04 bài thi kỹ năng nghe, nói, đọc, viết. APTIS ngày
                càng trở lên phổ biến tại Việt Nam và đã được nhiều tổ chức,
                trường học trên 85 quốc gia chấp nhận và sử dụng.
              </p>
              <div className="flex items-center">
                <Button className="custom-btn mt-[10%]  ">
                  ĐĂNG KÝ TƯ VẤN
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1  justify-center phone:hidden  tablet:flex">
            <Image src={teen} alt="teen" height={536} width={576} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroduceAptisB1;
