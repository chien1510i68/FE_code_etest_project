import Introduce from "./aptis/introduce1";

import Course from "../../component/course/course.jsx";
import Route from "../../component/route/route.jsx";
import AnotherCoures from "../../component/course/AnotherCoures";
import FormRegister from "../../component/form/FormRegister";
import Advertisement from "./aptis/advertisement";
import { Row } from "antd";
export default function Page({ item }) {
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
      style={{
        // margin: "0 auto",
        // maxWidth: "1440px",
        backgroundColor: "#ECF4FF",
      }}
    >
      <Introduce />
      <Advertisement />
      <h2 className="title">Thông tin khóa học </h2>
      <Row className="mx-[100rem] mt-[50px] " gutter={0} > 
        {inforCourses.map((item, ind) => (
          <Course item={item} key={ind} />
        ))}
      </Row>
      <Route />
      <AnotherCoures />
      <FormRegister />
    </section>
  );
}
