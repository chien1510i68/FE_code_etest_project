import React from "react";
import BannerVstep from "@/component/banner/BannerVstep";
import VstepB1Intro from "@/component/introduce/VstepB1Intro";
// import StructExamB1 from "./StructExamB1";

import Advertisement from "@/app/vstep/vstep/advertisement";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import { getDataDisplay } from "@/api/apiDisplay";

async function PageVstep(props) {
  const res = await getDataDisplay();
  let adList = [];

  let coursesList = [];
  let banner = {};
  if (res) {
    coursesList = res?.data?.items.slice(9, 14);

    adList = res?.data?.items.slice(1, 4);
    banner = res?.data?.items[0];
    // console.log("newList:: ", newList);
  }

  return (
    <div>
      <BannerVstep banner={banner} />

      <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        <Advertisement adList={adList} />
      </div>
      <RegisterCourseVstep />

      <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        <>
          <h2 className="title">Lộ trình học và thi</h2>

          <Route />
        </>
        <AnotherCoures />
        <h2 className="title">Đăng ký nhận tư vấn </h2>
        <FormRegister />
      </div>
    </div>
  );
}

export default PageVstep;
