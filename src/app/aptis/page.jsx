import Introduce from "./aptis/introduce1";

import Course from "../../component/course/course.jsx";
import Route from "../../component/route/route.jsx";
import AnotherCoures from "../../component/course/AnotherCoures";
import FormRegister from "../../component/form/FormRegister";
import Advertisement from "./aptis/advertisement";
import { Row } from "antd";
export default function Page({ item }) {
  const listStep = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];
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
  const introList = [
    { title: "Uy Tín", icon: "like", content: "uy tín" },
    { title: "Cam kết", icon: "like", content: "cam kết" },
    { title: "Thuận tiện", icon: "like", content: "thuận  tiện" },
  ];
  return (
    <>
      <Introduce />
      <h2 className="title">Tại sao nên chọn chúng tôi</h2>
      <div className="px-96 grid gap-48 laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-[100px]">
        {introList.map((value, index) => (
          <Advertisement key={index} value={value} />
        ))}
      </div>

      <h2 className="title">Thông tin khóa học </h2>
      <div className="px-96  grid  tablet:grid-cols-2 phone:grid-cols-1  gap-24">
        {inforCourses.map((item, ind) => (
          <Course item={item} key={ind} />
        ))}
      </div>
      <div className="mx-96">
        <h2 className="title">Lộ trình học và thi</h2>
        {listStep.map((item, index) => (
          <Route item={item} key={index} />
        ))}
      </div>
      <AnotherCoures />
      <FormRegister />
    </>
  );
}
