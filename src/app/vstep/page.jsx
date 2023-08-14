import Advertisement from "./vstep/advertisement";

import Introduce from "./vstep/introduce";
import RegisterCourseVstep from "../../component/form/RegisterCourseVstep";
import React from "react";
import pic11 from "public/kh_11.jpg";
import pic12 from "public/kh_12.jpg";
import pic13 from "public/13.jpg";
import Course from "../../component/course/course.jsx";
import Route from "../../component/route/route.jsx";
import AnotherCoures from "../../component/course/AnotherCoures";
import FormRegister from "../../component/form/FormRegister";
import { Row } from "antd";
export default function Page() {
  const listAds = [
    {
      title: "MỤC TIÊU",
      content:
        "Có kĩ năng đọc hiểu tiếng Anh nhanh và hiệu quả.  Có kĩ năng nghe một cách hiệu quả với các chiến lược làm bài thi nghe",
      pic: pic12,
    },
    {
      title: "PHÁT TRIỂN",
      content:
        "Vận dụng thành thạo các chiến lược thi VSTEP Có kĩ năng viết tiếng Anh học thuật nhằm làm tốt các dạng bài viết trong kì thi. Có kĩ năng đọc hiểu tiếng Anh nhanh và hiệu quả",
      pic: pic11,
    },
    {
      title: "TRẢI NGHIỆM",
      content:
        " Anh học thuật nhằm làm tốt các dạng bài viết trong kì thi. Có kĩ năng đọc hiểu tiếng Anh nhanh và hiệu quả.  Có kĩ năng nghe một cách hiệu quả với các chiến lược làm bài thi nghe.  ",
      pic: pic13,
    },
  ];
  const listStep = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    {
      step: "Bước 4",
      title: "Trước ngày thi",
      content:
        "Đội ngũ giảng viên dày dặn kinh nghiệm, có chuyên môn cao, cập nhật dạng đề thi liên tục và bám sát nội dung thi.",
    },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];
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
  return (
    <div
      style={
        {
          // margin: "0 auto",
          // maxWidth: "1440px",
          // backgroundColor: "#ECF4FF",
        }
      }
    >
      <Introduce />
      <RegisterCourseVstep />
      <>
        <div className="flex items-center flex-col">
          {listAds.map((value, ind) => (
            <Advertisement value={value} index={ind} key={ind} />
          ))}
        </div>
      </>

      <div>
        <h2 className="title">Thông tin khóa học </h2>
        <div className="px-96 mt-[50px] grid  tablet:grid-cols-2 phone:grid-cols-1  gap-24">
          {inforCourses.map((item, ind) => (
            <Course item={item} key={ind} />
          ))}
        </div>
      </div>
      <div className="mx-96">
        <h2 className="title">Lộ trình học và thi</h2>
        {listStep.map((item, index) => (
          <Route item={item} key={index} />
        ))}
      </div>
      <AnotherCoures />
      <FormRegister />
    </div>
  );
}
