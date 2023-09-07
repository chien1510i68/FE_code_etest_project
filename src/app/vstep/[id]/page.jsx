import React from "react";
import BannerVstepB1 from "@/component/banner/BannerVstepB1";
import VstepB1Intro from "@/component/introduce/VstepB1Intro";
import StructExamB1 from "./StructExamB1";
import CourseVstepB1 from "@/component/course/CourseVstepB1";
import Advertisement from "@/app/vstep/vstep/advertisement";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import { getDataDisplay } from "@/api/apiDisplay";
const listStep = [
  { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
  { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
  { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
  { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
  { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
];

async function PageVstepB1(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let adList = [];
  let routeList = [];
  let coursesList = [];
  if (res) {
    routeList = res?.data?.items.slice(4, 9);

    coursesList = res?.data?.items.slice(9, 14);
    console.log("route", routeList);
    adList = res?.data?.items.slice(1, 4);
    adList.map((item) => {
      return {
        // id: item.id,
        image: item.image,
        title: item.title,
        description: item.description,
      };
    });
    // console.log("newList:: ", newList);
  }

  return (
    <div>
      <BannerVstepB1 />

      {/* <h2 className="text-[60px] text-center my-[100px]"> this is the demo</h2> */}

      {/* content vstep b1   */}
      <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        <Advertisement adList={adList} />
        {/* <VstepB1Intro />
        <StructExamB1 />
        <div className="mb-[10rem]">
          <h2 className="title">Thông tin khóa học </h2>
          <CourseVstepB1 />
        </div> */}
      </div>
      <RegisterCourseVstep />

      <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        <>
          <h2 className="title">Lộ trình học và thi</h2>
          {routeList.map((item, index) => (
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
