import Image from "next/image";
import React from "react";
import teen from "/public/aptisb1header.svg";
function IntroduceAptisB1(props) {
  return (
    <div className="bg-[#FFF4E5]">
      <div className="grid grid-cols-2 items-center   h-[586px] mx-[10%]">
        <div className="col-span-1">
          <div className="">
            <h2 className="uppercase text-[black]">luyện thi aptis b1</h2>
            <br />
            <p>
              APTIS B1 là bài thi APTIS được quy đổi điểm theo khung tham chiếu
              châu Âu. Bài thi APTIS là bài thi đánh giá năng lực ngoại ngữ trên
              máy tính được nghiên cứu và phát triển bởi Hội đồng Anh. <br></br>{" "}
              APTIS đánh giá chính xác trình độ của thí sinh thông qua 04 bài
              thi kỹ năng nghe, nói, đọc, viết. APTIS ngày càng trở lên phổ biến
              tại Việt Nam và đã được nhiều tổ chức, trường học trên 85 quốc gia
              chấp nhận và sử dụng.
            </p>
            <button className="block laptop:h-[40px] laptop:w-[140px] rounded-[8px] bg-white text-[#FE9400] font-bold laptop:text-[15px] laptop:mx-auto laptop:mt-[10px] uppercase custom-btn tablet:mt-[10px] phone:text-[12px] h-[30px] w-[120px] mt-[1rem] ml-0 ">
              ĐĂNG KÝ TƯ VẤN
            </button>
          </div>
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src={teen} alt="teen" height={536} width={576} />
        </div>
      </div>
    </div>
  );
}

export default IntroduceAptisB1;
