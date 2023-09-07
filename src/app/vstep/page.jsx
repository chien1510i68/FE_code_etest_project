import React from "react";
import BannerVstep from "@/component/banner/BannerVstep";
import VstepB1Intro from "@/component/introduce/VstepB1Intro";
// import StructExamB1 from "./StructExamB1";
import CourseVstepB1 from "@/component/course/CourseVstepB1";
import Advertisement from "@/app/vstep/vstep/advertisement";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import { getDataDisplay } from "@/api/apiDisplay";

async function PageVstep(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let adList = [];
  let routeList = [];
  let coursesList = [];
  let banner = {};
  if (res) {
    routeList = res?.data?.items.slice(4, 9);

    coursesList = res?.data?.items.slice(9, 14);
    console.log("route", routeList);
    adList = res?.data?.items.slice(1, 4);
    banner = res?.data?.items[0];
    // console.log("newList:: ", newList);
  }

  return (
    <div>
      <BannerVstep banner={banner} />

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

export default PageVstep;
