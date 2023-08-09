"use client"
import React from "react";
import BannerToeic from "../../component/banner/BannerToeic";
import Advantage from "@/component/introduce/advantage";
import { Button, Col, Row } from "antd";
import Course from "@/component/course/course";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
const listAdvange = [
  {
    img: "uudiem_1.png",
    title:
      "Chương trình học bài bản, cung cấp học liệu miễn phí và bám sát cấu trúc đề,Chương trình học bài bản, cung cấp học liệu miễn phí và bám sát cấu trúc đề",
      className : "flex bg-[#EB1B26] rounded-full items-center my-[5rem] relative col-span-1 "
  },
  {
    img: "uudiem_2.png",
    title: " Trải nghiệm đề thi thử, thành thục kỹ năng và chiến thuật làm bài",
    className : "flex bg-[#EB1B26] rounded-full items-center my-[5rem] relative col-span-1 "

  },
  {
    img: "uudiem_3.png",
    title: "Lộ trình học cá nhân hóa linh hoạt  theo từng mục têu điểm số  ",
    className : "flex bg-[#01A14B] rounded-full items-center my-[5rem] relative col-span-1 "

  },
  {
    img: "uudiem_4.png",
    title:
      " Phát triển các kỹ năng Nghe- Nói - Đọc - Viết và vốn từ vựng hoàn chỉnh",
      className : "flex bg-[#01A14B] rounded-full items-center my-[5rem] relative col-span-1 "

  },
  {
    img: "uudiem_5.png",
    title: " Đội ngũ giảng viên chuyên môn cao hướng dẫn giảng dạy chi tiết",
    className : "flex bg-[#40498C] rounded-full items-center my-[5rem] relative col-span-1 "

  },
  {
    img: "uudiem_6.png",
    title: "Đội ngũ giảng viên chuyên môn cao hướng dẫn giảng dạy chi tiết ",
    className : "flex bg-[#40498C] rounded-full items-center my-[5rem] relative col-span-1 "

  },
];
function PageToeic(props) {
  return (
    <div className="">
      <BannerToeic />

      <div className="mx-[100px]">
        <h2 className="title">Ưu điểm của chúng tôi </h2>
        <div className="justify-between grid gap-12 phone:grid-cols-1 tablet:grid-cols-2">
          {listAdvange.map((item, index) => (
            <Advantage item={item} key={index} />
          ))}
        </div>
      </div>

      <>
        <h2 className="title">Thông tin khóa học </h2>
        {/* <Course item={} */}
        <div className="">
          <Col
            span={14}
            className="border-[1px] border-primaryColor border-solid rounded-[5px] mx-auto"
          >
            <h2 className="uppercase text-[5rem] font-[700] py-[2rem] bg-primaryColor text-[#fff] text-center ">
              khóa ôn toeic
            </h2>
            <p className="px-96 py-[5rem] h-[100rem] line-clamp-[10] ">
              {" "}
              Vận dụng thành thạo các chiến lược thi VSTEP Có kĩ năng viết tiếng
              Anh học thuật nhằm làm tốt các dạng bài viết trong kì thi. Có kĩ
              năng đọc hiểu tiếng Anh nhanh và hiệu quả. Có kĩ năng nghe một
              cách hiệu quả với các chiến lược làm bài thi nghe. Mở rộng vốn từ
              và phát triển kĩ năng tìm ý khi viết hay nói. Thành thạo nhiều chủ
              đề nói thực tế, đa dạng, nâng cao sự tự tin trong giao tiếp. Trải
              nghiệm với các bài thi thử theo định dạng VSTEP.,
            </p>
            <Button className="mx-auto block mb-[5rem] bg-primaryColor custom-btn uppercase hover:text-[#fff]">
              Đăng ký học{" "}
            </Button>
          </Col>
          {/* <Col span={2}></Col> */}
        </div>
      </>

      <div className="w-[50vw] mx-auto">
        <img src="/toeic_3.jpg" className="w-full " alt="" />
      </div>
      <div className="mx-[100px]">
        <h2 className="title ">Lộ trình học</h2>
        <div className="grid grid-cols-3">
        <img src="/toeic_5.webp" className=" h-full w-full object-cover col-span-3" alt="" />

        </div>
      </div>

      <div>
        <AnotherCoures/>
      </div>
      <div>
        <h2 className="title">Đăng ký tư vấn</h2>
        <FormRegister/>
      </div>
    </div>
  );
}

export default PageToeic;
