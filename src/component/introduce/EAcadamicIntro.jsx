import { Col } from "antd";
import React from "react";

const inforCourses = [
  {
    title: "Khóa ôn B1",
    content:
      "Vận dụng thành thạo các chiến lược thi VSTEP Có kĩ năng viết tiếng Anh học thuật nhằm làm tốt các dạng bài viết trong kì thi. Có kĩ năng đọc hiểu tiếng Anh nhanh và hiệu quả.  Có kĩ năng nghe một cách hiệu quả với các chiến lược làm bài thi nghe.  Mở rộng vốn từ và phát triển kĩ năng tìm ý khi viết hay nói.  Thành thạo nhiều chủ đề nói thực tế, đa dạng, nâng cao sự tự tin trong giao tiếp.  Trải nghiệm với các bài thi thử theo định dạng VSTEP.",
  },
  {
    title: "Khóa ôn B2",
    content:
      "Vận dụng thành thạo các chiến lược thi VSTEP Có kĩ năng viết tiếng Anh học thuật nhằm làm tốt các dạng bài viết trong kì thi. Có kĩ năng đọc hiểu tiếng Anh nhanh và hiệu quả.  Có kĩ năng nghe một cách hiệu quả với các chiến lược làm bài thi nghe.  Mở rộng vốn từ và phát triển kĩ năng tìm ý khi viết hay nói.  Thành thạo nhiều chủ đề nói thực tế, đa dạng, nâng cao sự tự tin trong giao tiếp.  Trải nghiệm với các bài thi thử theo định dạng VSTEP.",
  },
];
function EAcadamicIntro({item}) {
  return (
    <>
      <Col span={7} className="p-[5rem]  shadow-md ">
        <div className="w-full">
          <img src={item.img} alt="" className="w-full" />
          <div className="text-left mt-[5rem]">
            <h2 className="text-[5rem] font-[600] text-primaryColor my-[3rem]">{item.title}</h2>
            <p className="text-[4rem] font-[400]"> 
            {item.description}
            </p>
          </div>
        </div>
      </Col>
    </>
  );
}

export default EAcadamicIntro;
