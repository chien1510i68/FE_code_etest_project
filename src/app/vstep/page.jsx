import Advertisement from "./vstep/advertisement";

import Introduce from "./vstep/introduce";
import RegisterCourse from "./vstep/RegisterCourse";
import React from "react";
// import Course from "/app/component/layout/course.jsx";
// import Route from "/app/component/layout/route.jsx";
// import AnotherCoures from "/app/component/layout/AnotherCoures.jsx";
// import FormRegister from "/app/component/layout/FormRegister.jsx";
import Course from "../../component/course/course.jsx";
import Route from "../../component/route/route.jsx";
import AnotherCoures from "../../component/course/AnotherCoures";
import FormRegister from "../../component/form/FormRegister";
import { Row } from "antd";
export default function Page() {
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
  return (
    <section
      style={
        {
          // margin: "0 auto",
          // maxWidth: "1440px",
          // backgroundColor: "#ECF4FF",
        }
      }
    >
      <Introduce />
      <RegisterCourse />
      <Advertisement />
      <div>
        <h2 className="title">Thông tin khóa học </h2>
        <Row className="mx-[100rem] mt-[50px] ">
          {inforCourses.map((item, ind) => (
            <Course item={item} key={ind} />
          ))}
        </Row>
      </div>
      <Route />
      <AnotherCoures />
      <FormRegister />
    </section>
  );
}
