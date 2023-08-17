import React from "react";
import BannerVstepB2 from "../../../component/banner/BannerVstepB2";
import CourseVstepB2 from "../../../component/course/CourseVstepB2";
import ExamStructureVstepB2 from "./information/examStructureVstepB2";
import VstepB2Intro from "../../../component/introduce/VstepB2Intro";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from '@/component/course/AnotherCoures'
import FormRegister from "@/component/form/FormRegister";
function PageVstepB2(props) {
  const listIntroduceVstepB2 = [
    {
      title: "Đối tượng cần chứng chỉ tiếng Anh VSTEP B2",
      content:
        "Sinh viên hệ chất lượng cao thuộc các trường Đại học như Đại học Quốc gia Hà Nội, Đại học Thương Mại,.... Giáo viên tiếng Anh cấp mầm non, tiểu học, trung học cơ sở. Những người chuẩn bị làm đầu ra nghiên cứu sinh. Thi chuyên viên, giảng viên cao cấp. Ngoài những đối tượng kể trên thì việc sở hữu chứng chỉ tiếng Anh VSTEP B2 được coi là “một tấm vé thông hành” mở ra nhiều cơ hội phía trước.",
      image: "/Rectangle 1009.png",
    },
    {
      title: "Đối tượng cần chứng chỉ tiếng Anh VSTEP B2",
      content:
        "Sinh viên hệ chất lượng cao thuộc các trường Đại học như Đại học Quốc gia Hà Nội, Đại học Thương Mại,.... Giáo viên tiếng Anh cấp mầm non, tiểu học, trung học cơ sở. Những người chuẩn bị làm đầu ra nghiên cứu sinh. Thi chuyên viên, giảng viên cao cấp. Ngoài những đối tượng kể trên thì việc sở hữu chứng chỉ tiếng Anh VSTEP B2 được coi là “một tấm vé thông hành” mở ra nhiều cơ hội phía trước.",
      image: "/Rectangle 1010.png",
    },
    {
      title: "Đối tượng cần chứng chỉ tiếng Anh VSTEP B2",
      content:
        "Sinh viên hệ chất lượng cao thuộc các trường Đại học như Đại học Quốc gia Hà Nội, Đại học Thương Mại,.... Giáo viên tiếng Anh cấp mầm non, tiểu học, trung học cơ sở. Những người chuẩn bị làm đầu ra nghiên cứu sinh. Thi chuyên viên, giảng viên cao cấp. Ngoài những đối tượng kể trên thì việc sở hữu chứng chỉ tiếng Anh VSTEP B2 được coi là “một tấm vé thông hành” mở ra nhiều cơ hội phía trước.",
      image: "/Rectangle 1011.png",
    },
  ];
  const examSructureVstepB2 = [
    {
      title: "Listening (35 câu hỏi - 40 phút)",
      content:
        "* Phần 1: Nghe thông báo. *Phần 2: Nghe đoạn hội thoại. Phần 3: Nghe đoạn hội thoại/ diễn thuyết. ",
    },
    {
      title: "Speaking (3 phần - 12 phút)",
      content:
        "Phần 1: Tương tác xã hội. Phần 2: Thảo luận các giải pháp. Phần 3: Phát triển chủ đề.",
    },
    {
      title: "Reading (40 câu hỏi - 60 phút)",
      content:
        "Đề thi bao gồm 4 đoạn văn, mỗi đoạn là 10 câu, nội dung các đoạn xoay quanh cuộc sống hàng ngày như: công việc, nghề nghiệp, sở thích cá nhân,…",
    },
    {
      title: "Writing (2 bài - 60 phút)",
      content:
        " Bài 1:  120 từ - Viết email.  Bài 2:  250 từ - Viết luận đưa ra các ý kiến tranh luận về vấn đề xã hội/ ý kiến nào đó.",
    },
  ];
  const listStep = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];

  return (
    <>
      <div>
        <BannerVstepB2 />
        <div className="max-w-[1440px] desktop:mx-auto tablet:mx-[10%] phone:mx-[5%]">
          <VstepB2Intro listIntroduceVstepB2={listIntroduceVstepB2} />
          <div>
            <h2 className="text-orange-500 mb-[8rem] mt-[10rem] font-[500] text-[6rem]">
              Cấu trúc đề thi B2 VSTEP
            </h2>
            <p className="mb-[10rem]">
              Tương tự như cấu trúc bài thi B1 VSTEP, bài thi B2 cũng gồm có 4
              kỹ năng:{" "}
            </p>
            <div>
              <ExamStructureVstepB2 examSructureVstepB2={examSructureVstepB2} />
              ;
            </div>
          </div>
          <div>
            <h2 className="title">Thông tin khóa học</h2>
            <CourseVstepB2 />
          </div>
        </div>

        <RegisterCourseVstep />

        <div className="max-w-[1440px] desktop:mx-auto tablet:mx-[10%] phone:mx-[5%]">
          <>
            <h2 className="title">Lộ trình học và thi</h2>
            {listStep.map((item, index) => (
              <Route item={item} key={index} />
            ))}
          </>
          <AnotherCoures />
          <h2 className="title">Đăng ký nhận tư vấn </h2>
          <FormRegister/>
        </div>
      </div>
    </>
  );
}

export default PageVstepB2;
