import React from "react";
import BannerVstepB1 from "@/component/banner/BannerVstepB1";
import VstepB1Intro from "@/component/introduce/VstepB1Intro";
import StructExamB1 from "./StructExamB1";
import CourseVstepB1 from "@/component/course/CourseVstepB1";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
const listStep = [
  { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
  { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
  { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
  { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
  { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
];
function PageVstepB1(props) {
  return (
    <div>
      <BannerVstepB1 />
      <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        <VstepB1Intro />
        <StructExamB1 />
        <div className="mb-[10rem]">
          <h2 className="title">Thông tin khóa học </h2>
          <CourseVstepB1 />
        </div>
      </div>
      <RegisterCourseVstep />

      <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        <>
          <h2 className="title">Lộ trình học và thi</h2>
          {listStep.map((item, index) => (
            <Route item={item} key={index} />
          ))}
        </>
        <AnotherCoures />
        <h2 className="title">Đăng ký nhận tư vấn </h2>
        <FormRegister />
      </div>
    </div>
  );
}

export default PageVstepB1;
