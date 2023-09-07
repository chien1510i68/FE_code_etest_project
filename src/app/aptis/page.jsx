import Introduce from "./aptis/introduce1";

import Course from "../../component/course/course.jsx";
import Route from "../../component/route/route.jsx";
import AnotherCoures from "../../component/course/AnotherCoures";
import FormRegister from "../../component/form/FormRegister";
import Advertisement from "./aptis/advertisement";
import { getDataDisplay } from "@/api/apiDisplay";
async function PageAptis() {
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

  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let adList = [];
  let routeList = [];
  if (res) {
    routeList = res?.data?.items.slice(4, 9);

    console.log("route", routeList);
    adList = res?.data?.items.slice(15, 18);
  }
  return (
    <>
      <Introduce />
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-[10%]">
          <h2 className="title mt-[0]">Tại sao nên chọn chúng tôi</h2>
          <div className=" grid gap-48 laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-[5%]">
            {adList.map((value, index) => (
              <Advertisement key={index} value={value} />
            ))}
          </div>

          <h2 className="title">Thông tin khóa học </h2>
          <div className="  grid  tablet:grid-cols-2 phone:grid-cols-1  gap-24">
            {inforCourses.map((item, ind) => (
              <Course item={item} key={ind} />
            ))}
          </div>
          <div className="">
            <h2 className="title">Lộ trình học và thi</h2>
            {routeList.map((item, index) => (
              <Route item={item} key={index} />
            ))}
          </div>
          <AnotherCoures />
          <FormRegister />
        </div>
      </div>
    </>
  );
}

export default PageAptis;
