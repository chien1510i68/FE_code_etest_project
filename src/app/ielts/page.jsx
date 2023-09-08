import React from "react";
import IeltsIntro from "@/component/introduce/IeltsIntro";
import FormRegister from "@/component/form/FormRegister";
import AnotherCoures from "@/component/course/AnotherCoures";
import Course from "@/component/studyDetail/course";
import BannerIelts from "@/component/banner/BannerIelts";
import { getDataDisplay } from "@/api/apiDisplay";
import { getServiceById } from "@/api/apiService";
import Image from "next/image";

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
async function IeltsPage(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let adList = [];
  let banner = [];
  if (res) {
    adList = res?.data?.items.slice(19, 25);
    banner = res?.data?.items.slice(18, 19);
  }
  const res2 = await getServiceById(12);
  let service = [];
  if (res2) {
    service = res2?.data;
  }
  return (
    <div className="">
      <BannerIelts banner={banner} />
      <div className=" max-w-[1440px] mx-[auto] bg-[#fff] ">
        <div className="mx-[10%]">
          <div>
            <h2 className="title">Giới thiệu tổng quan</h2>
            <IeltsIntro adList={adList} />
          </div>

          <>
            <h2 className="title">Thông tin khóa học </h2>
            <Course service={service} />
          </>

          <>
            <h2 className="title">Lộ trình học </h2>
            <div className="flex justify-center">
              <Image src="/ielts.png" alt="pic" width={900} height={423} />
            </div>
          </>

          <>
            <h2 className="title">Đăng ký khóa học</h2>
            <FormRegister />
          </>
        </div>
      </div>
    </div>
  );
}

export default IeltsPage;
