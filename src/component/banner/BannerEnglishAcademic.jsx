import { Button } from "antd";
import React from "react";

function BannerEnglishAcademic(props) {
  return (
    // <div className="mt-[45px] w-[100vw] bgr-englishacademic text-[#fff] relative">
    //   <div className="w-[40%] mx-auto text-center absolute top-[20%] left-[50%] translate-x-[-50%] translate-x-[-50%] border-[10px] p-[5rem] border-primaryColor border-solid ">
    //     <h2 className="text-[8rem] font-[700] my-[5rem] uppercase">
    //       Luyện thi Anh ngữ học thuật{" "}
    //     </h2>
    //     <p className="text-[4.5rem] font-[500]">
    //       Khóa học mang đến cho học viên những kỹ năng cần thiết, giúp học viên
    //       thành thạo các kỹ năng tiếng Anh học thuật tạo nên bước đột phát cho
    //       quá trình học tập và con đường sự nghiệp tương lai.
    //     </p>
    //     <Button className="custom-btn uppercase font-[600] mt-[5rem] hover:border-none">
    //       đăng ký tư vấn
    //     </Button>
    //   </div>
    // </div>
    <>
      <div className="w-[100vw] relative">
        <img
          src="/anhnguhocthuat_0.png"
          className="w-full h-[70vh] object-cover"
          alt=""
        />
        <div className="w-[40%] mx-auto text-center absolute top-[20%] left-[50%] translate-x-[-50%] translate-x-[-50%] border-[10px] p-[5rem] border-primaryColor border-solid ">
          <h2 className="laptop:text-[8rem] tablet: font-[700] my-[5rem] uppercase">
            Luyện thi Anh ngữ học thuật{" "}
          </h2>
          <p className="text-[4.5rem] font-[500] line-clamp-6 h-[41rem">
            Khóa học mang đến cho học viên những kỹ năng cần thiết, giúp học
            viên thành thạo các kỹ năng tiếng Anh học thuật tạo nên bước đột
            phát cho quá trình học tập và con đường sự nghiệp tương lai.
          </p>
          <Button className="custom-btn uppercase font-[600] mt-[5rem] hover:border-none">
            đăng ký tư vấn
          </Button>
        </div>
      </div>
    </>
  );
}

export default BannerEnglishAcademic;
