import React from "react";
import BannerStudySchedule from "@/component/banner/BannerStudySchedule";
// import Area from "./Area";
import Route from "@/component/route/route";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import FormRegister from "@/component/form/FormRegister";
import New from "@/component/news/New";
function PageStudySchedule() {
  const listStep = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];
  const newList = [
    {
      img: "https://images.unsplash.com/photo-1599906823892-321f8347dfcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2UlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Luyện thi TOEIC cấp tốc công phá 550+ TOEIC trong 14 ngày",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      img: "https://images.unsplash.com/photo-1611529375210-577127775587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2UlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Những công việc phổ biến và có tiềm năng trong ngành Công nghệ thông tin",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      img: "https://images.unsplash.com/photo-1520564816385-4f9d711941aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title:
        "10 dạng bài thường gặp trong phần thi Reading và cách nâng cấp câu trả lời",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
  ];
  return (
    <div>
      <BannerStudySchedule />
      <div className=" mt-[20rem] mb-[5rem] max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        {/* <Area /> */}
        <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
          <>
            <h2 className="title">Lộ trình học và thi</h2>
            {listStep.map((item, index) => (
              <Route item={item} key={index} />
            ))}
          </>
        </div>
      </div>
      <RegisterCourseVstep />
      <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%]">
        <h2 className="title">Đăng ký nhận tư vấn </h2>
        <FormRegister />
        <New newList={newList} />
      </div>
    </div>
  );
}

export default PageStudySchedule;
