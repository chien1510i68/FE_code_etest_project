import { Button, Col, Row } from "antd";
import React from "react";
import IeltsIntro from "@/component/introduce/IeltsIntro";
import Course from "@/component/course/course";
import FormRegister from "@/component/form/FormRegister";
import AnotherCoures from "@/component/course/AnotherCoures";
import Route from "../../component/route/route";
import BannerIelts from "@/component/banner/BannerIelts";
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
      "Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.Chương trình luyện thi IELTS tại E-Test giúp học viên có được sự hiểu biết toàn diện về cấu trúc bài thi IELTS, thành thục kỹ năng.",
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
    <div className="mx-auto  max-w-[1440px]">
      <div className="pt-[45px] bg-[#fff] ">
        {/* banner */}
        <BannerIelts />

        <div>
          <h2 className="title">Giới thiệu tổng quan</h2>
          <IeltsIntro listIntroduceIelts={listIntroduceIelts} />
        </div>

        <>
          <h2 className="title">Thông tin khóa học </h2>
          <div className="px-96 mt-[50px] grid  tablet:grid-cols-2 phone:grid-cols-1  gap-24">
            {inforCourses.map((item, ind) => (
              <Course item={item} key={ind} />
            ))}
          </div>
        </>

        <>
          <h2 className="title">Lộ trình học </h2>
          {/* <Route /> */}
        </>

        <>
          <h2 className="title">Đăng ký khóa học</h2>
          <FormRegister />
        </>
      </div>
    </div>
  );
}

export default IeltsPage;
