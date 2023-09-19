import React from "react";
import BannerVstepB1 from "@/component/banner/BannerVstepB1";
import VstepB1Intro from "@/component/introduce/VstepB1Intro";
import StructExamB1 from "./luyen-thi-B1/StructExamB1";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import { getDataDisplay } from "@/api/apiDisplay";
import { getServiceById } from "@/api/apiService";
import Detail from "@/component/studyDetail/detail";
import Detail2 from "@/component/studyDetail/detail2";
import DownloadDocument from "@/component/modal/downloadDocument";
import Image from "next/image";

async function PageVstepB1(props) {
  const res = await getDataDisplay();

  let banner = {};

  if (res) {
    banner = res?.data?.items[32];
  }
  const res2 = await getServiceById(14);
  let service = [];
  if (res2) {
    service = res2?.data;
  }
  return (
    <div>
      <BannerVstepB1 banner={banner} />
      <div className="mx-[auto] max-w-[1440px]">
        <div className=" mx-[10%]">
          <VstepB1Intro />
          <StructExamB1 />
        </div>
        <div className="mx-[10%] ">
          <h2 className="title">Thông tin khóa học</h2>
          <div className="grid tablet:grid-rows-2  phone:grid-rows-3">
            <div className="tablet:row-span-1 grid tablet:grid-cols-2  phone:grid-cols-1 phone:row-span-2">
              <div className="col-span-1">
                <h2 className="titleAptisB1">KHÓA ÔN B1</h2>
                <Detail service={service} />
              </div>
              <div className="col-span-1  ">
                <div className="relative image-bottom-aptis-b1 image-top-aptis-b1 phone:my-[5%]">
                  <Image
                    src={service.image}
                    alt="pic"
                    className="object-cover rounded-[15px] z-100"
                    width={600}
                    height={336}
                  />
                </div>
              </div>
            </div>
            <div className="row-span-1 laptop::w-[60%] phone:w-[100%]">
              <Detail2 service={service} />
            </div>
          </div>
        </div>
        <DownloadDocument />
        <RegisterCourseVstep />

        <div className=" mx-[10%] ">
          <>
            <h2 className="title">Lộ trình học và thi</h2>
            <Route />
          </>
          <AnotherCoures />
          <h2 className="title">Đăng ký nhận tư vấn </h2>
          <FormRegister />
        </div>
      </div>
    </div>
  );
}

export default PageVstepB1;
