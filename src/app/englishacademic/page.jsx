import { Button, Row } from "antd";
import React from "react";
import EAcadamicIntro from "@/component/introduce/EAcadamicIntro";
import Course from "@/component/course/course";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";

const listEAcademic = [
  {
    img: "/13.jpg",
    title: "Giảng viên xuất sắc  ",
    description:
      "Đội ngũ giảng viên dày dặn kinh nghiệm, có chuyên môn cao, cập nhật dạng đề thi liên tục và bám sát nội dung thi.",
  },
  {
    img: "/13.jpg",
    title: "Giảng viên xuất sắc  ",
    description:
      "Đội ngũ giảng viên dày dặn kinh nghiệm, có chuyên môn cao, cập nhật dạng đề thi liên tục và bám sát nội dung thi.",
  },
  {
    img: "/13.jpg",
    title: "Giảng viên xuất sắc  ",
    description:
      "Đội ngũ giảng viên dày dặn kinh nghiệm, có chuyên môn cao, cập nhật dạng đề thi liên tục và bám sát nội dung thi.",
  },
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

const listStep = [
  { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
  { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
  { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
  { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
  { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
];
function PageEnglishAcademic(props) {
  return (
    <>
      <div className="mt-[45px] w-[100vw] h-[500px] bgr-englishacademic text-[#fff] relative">
        <div className="w-[40%] mx-auto text-center absolute top-[20%] left-[50%] translate-x-[-50%] translate-x-[-50%] border-[10px] p-[5rem] border-primaryColor border-solid ">
          <h2 className="text-[8rem] font-[700] my-[5rem] uppercase">
            Luyện thi Anh ngữ học thuật{" "}
          </h2>
          <p className="text-[4.5rem] font-[500]">
            Khóa học mang đến cho học viên những kỹ năng cần thiết, giúp học
            viên thành thạo các kỹ năng tiếng Anh học thuật tạo nên bước đột
            phát cho quá trình học tập và con đường sự nghiệp tương lai.
          </p>
          <Button className="custom-btn uppercase font-[600] mt-[5rem] hover:border-none">
            đăng ký tư vấn
          </Button>
        </div>
      </div>
      <Row gutter={40} className="mx-[100px] justify-between mt-[100px] ">
        {listEAcademic.map((item, index) => (
          <EAcadamicIntro item={item} key={index} />
        ))}
      </Row>
      <>
        <h2 className="title">Thông tin khóa học </h2>
        <Row className="mx-[50rem] mt-[50px] " gutter={0}>
          {inforCourses.map((item, ind) => (
            <Course item={item} key={ind} />
          ))}
        </Row>

        <div className="w-[80vw] mx-auto mt-[100px] border-none">
          <img src="/5.jpg" className="w-full " alt="" />
        </div>

        <div className="mx-[100px]">
          <h2 className="title">Lộ trình học và thi</h2>
          {listStep.map((item, index) => (
            <Route item={item} key={index} />
          ))}
        </div>

        <AnotherCoures />

        <>
          <h2 className="title">Đăng ký nhận tư vấn </h2>

          <FormRegister />
        </>
      </>
    </>
  );
}

export default PageEnglishAcademic;
