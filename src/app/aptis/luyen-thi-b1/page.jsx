import React from "react";
import IntroduceAptisB1 from "./luyen-thi-b1/introduce";
import Customers from "./luyen-thi-b1/customers";
import DOMPurify from "dompurify";
import pic1 from "public/aptisb1pic1.png";
import pic2 from "public/aptisb1pic2.png";
import pic3 from "public/aptisb1pic3.png";
import pic4 from "public/Mask Group.png";
import Image from "next/image";

function PageAptisB1(props) {
  const listCustomers = [
    {
      img: pic1,
      title: "Dành cho giáo viên",
      description:
        "Aptis thường được các giáo viên chọn lựa để kiểm tra trình độ để nâng cao chất lượng giảng dạy của ngành giáo dục.",
    },
    {
      img: pic2,
      title: "Dành cho học sinh",
      description:
        "Bài kiểm tra Aptis còn dành cho học sinh trong độ tuổi từ 13 đến 17 tuổi. Nội dung kiểm tra xoay quanh các kiến thức tiếng Anh mà các em đã được học, phù hợp với trình độ học sinh và là tiền đề để thi các chứng chỉ tiếng Anh quốc tế cao hơn.",
    },
    {
      img: pic3,
      title: "Dành cho các doanh nghiệp",
      description:
        "Chứng chỉ Aptis khá thông dụng dành cho các công ty và nhà tuyển dụng. Bài thi được điều chỉnh nội dung phù hợp với nhu cầu của từng tổ chức. Các nội dung liên quan đến nhiều lĩnh vực như kinh doanh, du lịch, v.v.",
    },
  ];
  return (
    <section>
      <div style={{ margin: "0 auto", width: "1440px" }}>
        <IntroduceAptisB1 />
        <div className="mx-[10%] my-[5%]">
          <div>
            <h2>Đối tượng cần chứng chỉ tiếng Anh APTIS B1</h2>
            <div className="grid gap-48 grid-cols-3">
              {listCustomers.map((item, index) => (
                <Customers item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-24">
            <div className="col-span-2">ádd</div>
            <div className="col-span-1 grid grid-rows-2 gap-[20%]">
              <Image src={pic4} alt="pic" className="row-span-1" />
              <Image src={pic4} alt="pic" className="row-span-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageAptisB1;
