import { Button, Row } from "antd";
import React from "react";
import EAcadamicIntro from "@/component/introduce/EAcadamicIntro";
import Course from "@/component/course/course";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import BannerEnglishAcademic from "@/component/banner/BannerEnglishAcademic";
import { getDataDisplay } from "@/api/apiDisplay";

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

async function PageEnglishAcademic(props) {
  const res = await getDataDisplay();
  let listEAcademic = [];
  let routeList = [];
  let banner = {};
  if (res) {
    routeList = res?.data?.items.slice(4, 9);

    // console.log("route", routeList);
    listEAcademic = res?.data?.items.slice(27, 30);
    banner = res?.data?.items[26];
    // console.log("object banner", banner);
  }
  return (
    <div className="mx-[auto]">
      <BannerEnglishAcademic banner={banner} />
      <div className="max-w-[1440px] mx-[10%]">
        <div className=" grid gap-48 laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-[100px] ">
          {listEAcademic.map((item, index) => (
            <EAcadamicIntro item={item} key={index} />
          ))}
        </div>
        <div>
          <h2 className="title">Thông tin khóa học </h2>
          <div
            className=" grid gap-24 tablet:grid-cols-2  phone:grid-cols-1 mt-[50px] "
            gutter={0}
          >
            {inforCourses.map((item, ind) => (
              <Course item={item} key={ind} />
            ))}
          </div>

          <div className="w-[80vw] mt-[10%] border-none">
            <img src="/5.jpg" className="w-full " alt="" />
          </div>

          <div className="">
            <h2 className="title">Lộ trình học và thi</h2>
            {routeList.map((item, index) => (
              <Route item={item} key={index} />
            ))}
          </div>

          <AnotherCoures />

          <>
            <h2 className="title">Đăng ký nhận tư vấn </h2>

            <FormRegister />
          </>
        </div>
      </div>
    </div>
  );
}

export default PageEnglishAcademic;
