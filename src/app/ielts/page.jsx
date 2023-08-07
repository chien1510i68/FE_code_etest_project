import { Button, Col, Row } from "antd";
import React from "react";
import IeltsIntro from "@/component/introduce/IeltsIntro";
import Course from "@/component/course/course";
import FormRegister from "@/component/form/FormRegister";

const listIntroduceIelts = [
  {
    image: "bar-chart.png",
    title: "mục tiêu",
    description:
      "Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.",
  },
  {
    image: "trend.png",
    title: "mục tiêu",
    description:
      "Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.",
  },
  {
    image: "open-book.png",
    title: "mục tiêu",
    description:
      "Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.",
  },
  {
    image: "open-book.png",
    title: "mục tiêu",
    description:
      "Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.",
  },
  {
    image: "open-book.png",
    title: "mục tiêu",
    description:
      "Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.",
  },
  {
    image: "open-book.png",
    title: "mục tiêu",
    description:
      "Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.",
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
function IeltsPage(props) {
  return (
    <div className="pt-[45px] bg-[#fff]">
      {/* banner */}
      <Row>
        <Col span={12} className=" max-h-[500px]">
          <img
            src="/16 (1).jpg"
            className="w-full h-full object-cover "
            alt=""
          />
        </Col>
        <Col className="bg-[#FFF4E5] pt-[25rem]" span={12}>
          <h2 className="py-auto block px-[20rem] font-[500] text-[8rem]">
            LUYỆN THI IELTS
          </h2>
          <p className="py-auto block px-[20rem] font-[400] text-[4rem]">
            IELTS (International English Language Testing System) là kỳ thi quốc
            tế đánh giá khả năng sử dụng tiếng Anh cho học sinh ở các nước không
            sử dụng tiếng Anh như ngôn ngữ mẹ đẻ. Cho đến nay, IELTS đã được
            chấp nhận bởi hơn 7000 tổ chức bao gồm các trường đại học, các công
            ty đa quốc gia trên thế giới.
          </p>
          <Button className="ml-auto block mt-[10rem] mr-[20rem] bg-[#FB9400] shadow-md hover:scale-[1.1] text-[#fff] hover:border-none border-none ">
            {" "}
            Đăng ký tư vấn
          </Button>
        </Col>
      </Row>

      <div>
        <h2 className="title">Giới thiệu tổng quan</h2>
        <IeltsIntro listIntroduceIelts={listIntroduceIelts} />
      </div>

      <>
        <h2 className="title">Thông tin khóa học </h2>
        <Row className="mx-[100rem] mt-[50px] " gutter={0}>
          {inforCourses.map((item) => (
            <Course item={item} />
          ))}
        </Row>
      </>

      <>
            <h2 className="title">Lộ trình học </h2>

      </>

      <>
      <FormRegister/>
      </>
    </div>
  );
}

export default IeltsPage;
