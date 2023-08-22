import Image from "next/image";
import React from "react";
import teen from "/public/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.svg";
function IntroduceAptisB1(props) {
  return (
    <>
      <div className="grid grid-cols-2 items-center bg-[#FFF4E5]  h-[586px] ">
        <div className="col-span-1">
          <div className="ml-[20rem]">
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
          </div>
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src={teen} alt="teen" height={536} width={340} />
        </div>
      </div>
    </>
  );
}

export default IntroduceAptisB1;
