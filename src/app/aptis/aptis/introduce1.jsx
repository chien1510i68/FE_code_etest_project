import React from "react";
import Image from "next/image";
import pic from "public/16.jpg";
function Introduce(props) {
  const list = [
    "Cam kết chất lượng đầu ra bằng văn bản",
    "90% thi đạt ngay lần đầu",
    "Thủ tục đơn giản - Lịch học linh hoạt",
  ];
  return (
    <div className="h-[608px] t-[138px]">
      <div className="h-[516px] bg-[url(/banner_aptis.png)] flex item-center text-white font-medium ">
        {" "}
        <div className="ml-[60px] mt-[30px] leading-loose">
          <h2 className=" text-white text-[32px]">
            THI CHỨNG CHỈ TIẾNG ANH APTIS B1 - B2
          </h2>
          <br></br>

          <h2 className="text-black font-bold text-[32px]">
            CHUẨN CỦA HỘI ĐỒNG ANH CẤP
          </h2>
          <br></br>
          <h3 className="font-semibold text-[24px]">
            CAM KÊT ĐẦU RA BẰNG VĂN BẢN
          </h3>
          <br></br>

          <ul className="list-disc ml-[20px]">
            {list.map((value, ind) => (
              <li key={ind}>
                <p style={{ fontSize: "18px" }}>{value}</p>
              </li>
            ))}
          </ul>
          <button className="block h-[40px] w-[140px] rounded-[8px] bg-white text-[#FE9400] font-bold text-[15px] mx-auto mt-[30px]">
            ĐĂNG KÝ TƯ VẤN
          </button>
        </div>
        <div className="h-[500px] w-[700px] relative top-[20rem] left-[8rem]">
          <Image
            src={pic}
            alt="pic"
            className="rounded-[60%] block w-full object-cover  h-full bg-[#383a3b80] shadow-lg shadow-[#383a3b80]"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
