import React from "react";
import BannerVstepB2 from "@/component/banner/BannerVstepB2";

// import ExamStructureVstepB2 from "@/information/examStructureVstepB2";
import VstepB2Intro from "@/component/introduce/VstepB2Intro";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import { getDataDisplay } from "@/api/apiDisplay";
import { getServiceById } from "@/api/apiService";
import Detail from "@/component/studyDetail/detail";
import Detail2 from "@/component/studyDetail/detail2";
import DownloadDocument from "@/component/modal/downloadDocument";
import Image from "next/image";

async function PageVstepB2(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let banner = {};
  if (res) {
    banner = res?.data?.items[33];
  }
  const res2 = await getServiceById(15);
  let service = [];
  if (res2) {
    service = res2?.data;
  }
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

  return (
    <>
      <BannerVstepB2 banner={banner} />
      <div className="max-w-[1440px] mx-[auto]">
        <div className="mx-[10%]">
          {/* <VstepB2Intro listIntroduceVstepB2={listIntroduceVstepB2} /> */}
          <div dangerouslySetInnerHTML={{ __html: service?.content }}></div>
          <div>
            <h2 className="text-orange-500 mb-[8rem] mt-[10rem] font-[500] text-[6rem]">
              Cấu trúc đề thi B2 VSTEP
            </h2>
            <p className="mb-[10rem]">
              Tương tự như cấu trúc bài thi B1 VSTEP, bài thi B2 cũng gồm có 4
              kỹ năng:{" "}
            </p>
          </div>
          <div className="mx-[10%] ">
            <h2 className="title">Thông tin khóa học</h2>
            <div className="grid laptop:grid-rows-2 ">
              <div className="row-span-1 grid laptop:grid-cols-2 phone:grid-cols-1 gap-48">
                <div className="col-span-1 flex items-center">
                  <div>
                    <Image
                      src={service.image}
                      alt="pic"
                      className="object-cover rounded-[15px] z-100"
                      width={600}
                      height={336}
                    />
                  </div>
                </div>
                <div className="col-span-1 relative ">
                  <h2 className="titleAptisB1">KHÓA ÔN B2</h2>
                  <Detail service={service} />
                </div>
              </div>
              <div className="row-span-1 laptop:w-[80%] phone:w-[100%]">
                <Detail2 service={service} />
              </div>
            </div>
          </div>
        </div>
        <DownloadDocument />
        <RegisterCourseVstep />

        <div className="mx-[10%]">
          <>
            <h2 className="title">Lộ trình học và thi</h2>
            <Route />
          </>
          <AnotherCoures />
          <h2 className="title">Đăng ký nhận tư vấn </h2>
          <FormRegister />
        </div>
      </div>
    </>
  );
}

export default PageVstepB2;
