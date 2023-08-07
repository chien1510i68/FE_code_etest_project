import { Button, Col, Row } from "antd";
import React from "react";
import IeltsIntro from "@/component/introduce/IeltsIntro";
import Course from "@/component/course/course";

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
        <IeltsIntro listIntroduceIelts={listIntroduceIelts} />
      </div>

      <>
        <Row className="mx-[300px] " gutter={0}> 
          <Course />
          <Course />
         
        </Row>
      </>
    </div>
  );
}

export default IeltsPage;
