import React from "react";
import BannerVstepB1 from "@/component/banner/BannerVstepB1";
import VstepB1Intro from "@/component/introduce/VstepB1Intro";
import StructExamB1 from "./luyen-thi-B1/StructExamB1";
import CourseVstepB1 from "@/component/course/CourseVstepB1";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import { getDataDisplay } from "@/api/apiDisplay";
import DownloadDocument from "@/component/modal/downloadDocument";

async function PageVstepB1(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let banner = {};
  let routeList = [];
  if (res) {
    routeList = res?.data?.items.slice(4, 9);
    banner = res?.data?.items[32];
    // console.log("route", routeList);
    // adList = res?.data?.items.slice(15, 18);
  }
  return (
    <div>
      <BannerVstepB1 banner={banner} />
      <div className="max-w-[1440px] mx-[10%]">
        <VstepB1Intro />
        <StructExamB1 />
        <div className="mb-[10rem]">
          <h2 className="title">Thông tin khóa học </h2>
          <CourseVstepB1 />
        </div>
      </div>

      <DownloadDocument />
      <RegisterCourseVstep />

      <div className="max-w-[1440px] mx-[10%] ">
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
