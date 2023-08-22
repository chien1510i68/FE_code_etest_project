import React from "react";
import Image from "next/image";
import pic from "public/ctr_3 1.png";
function Introduce(props) {
  return (
    <div className="grid bg-[#fff4e5] tablet:grid-cols-2 phone:grid-col-1 px-[10%] ">
      <div className="col-span-1 max-h-[500px] phone: tablet:block ">
        <div className="flex justify-end">
          <Image
            src={pic}
            alt="pic"
            width={600}
            height={410}
            // layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            // className="flex-end object-cover "
          />
        </div>
      </div>
      <div className="col-span-1 ">
        <div className="bg-[#FFF4E5] tablet:py-[20rem] phone:py-[10rem] h-full ">
          <h2 className="pb-[5rem] block px-[10rem] font-[500] text-[8rem]">
            LUYỆN THI VSTEP
          </h2>
          <p className="py-auto block px-[10rem] font-[400] text-[4rem]">
            VSTEP (Vietnamese Standardized Test of English Proficiency) là kỳ
            thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ (NLNN)
            6 bậc dùng cho Việt Nam (tương đương với trình độ A1, A2, B1, B2,
            C1,C2) do các trường ủy quyền của Bộ Giáo dục và Đào tạo cấp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
