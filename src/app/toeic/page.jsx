import React from "react";
import BannerToeic from "../../component/banner/BannerToeic";
import Advantage from "@/component/introduce/advantage";
import Course from "@/component/studyDetail/course";
import { getDataDisplay } from "@/api/apiDisplay";
import { getServiceById } from "@/api/apiService";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import Image from "next/image";

async function PageToeic(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let adList = [];
  let banner = [];
  if (res) {
    adList = res?.data?.items.slice(39, 46);
    banner = res?.data?.items.slice(25, 26);
  }
  const res2 = await getServiceById(11);
  let service = [];
  if (res2) {
    service = res2?.data;
  }
  return (
    <div>
      <BannerToeic banner={banner} />
      <div className=" mx-[auto] max-w-[1440px]">
        <div className="mx-[10%]">
          <div>
            <h2 className="title">Ưu điểm của chúng tôi </h2>
            <div className="justify-between grid gap-12 phone:grid-cols-1 tablet:grid-cols-2">
              {adList.map((item, index) => (
                <Advantage item={item} key={index} />
              ))}
            </div>
          </div>

          <>
            <h2 className="title">Thông tin khóa học </h2>
            <Course service={service} />
          </>

          <div className="">
            <Image
              src="/toeic_3.jpg"
              className="w-full "
              alt="toeic3"
              width={950}
              height={347}
            />
          </div>
          <div>
            <h2 className="title ">Lộ trình học</h2>
            <div className="grid grid-cols-3">
              <Image
                src="/toeic_5.webp"
                className=" h-full w-full object-cover col-span-3"
                alt="pic"
                height={520}
                width={1043}
              />
            </div>
          </div>

          <div>
            <AnotherCoures />
          </div>
          <div>
            <h2 className="title">Đăng ký tư vấn</h2>
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageToeic;
