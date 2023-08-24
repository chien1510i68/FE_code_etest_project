import IntroduceAptisB1 from "./luyen-thi-b1/introduce";
import Customers from "./luyen-thi-b1/customers";
import pic3 from "public/aptisb1pic4.svg";
import pic4 from "public/Mask Group.png";
import pic5 from "public/confident-teacher-explaining-lesson-pupils 1.png";
import Image from "next/image";
import Thoihan from "./luyen-thi-b1/thoihan";
import Cautrucdethi from "./luyen-thi-b1/cautrucdethii";
import Detail from "./luyen-thi-b1/detail";
import Mota from "./luyen-thi-b1/mota";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import { Button } from "antd";
import DownloadDocument from "@/component/modal/downloadDocument";
function PageAptisB1(props) {
  const listStep = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    {
      step: "Bước 4",
      title: "Trước ngày thi",
      content:
        "Đội ngũ giảng viên dày dặn kinh nghiệm, có chuyên môn cao, cập nhật dạng đề thi liên tục và bám sát nội dung thi.",
    },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];
  const listCustomers = [
    {
      img: "/aptisb1pic1.png",
      title: "Dành cho giáo viên",
      description:
        "Aptis thường được các giáo viên chọn lựa để kiểm tra trình độ để nâng cao chất lượng giảng dạy của ngành giáo dục.",
    },
    {
      img: "/aptisb1pic2.png",
      title: "Dành cho học sinh",
      description:
        "Bài kiểm tra Aptis còn dành cho học sinh trong độ tuổi từ 13 đến 17 tuổi. Nội dung kiểm tra xoay quanh các kiến thức tiếng Anh mà các em đã được học, phù hợp với trình độ học sinh và là tiền đề để thi các chứng chỉ tiếng Anh quốc tế cao hơn.",
    },
    {
      img: "/aptisb1pic3.png",
      title: "Dành cho các doanh nghiệp",
      description:
        "Chứng chỉ Aptis khá thông dụng dành cho các công ty và nhà tuyển dụng. Bài thi được điều chỉnh nội dung phù hợp với nhu cầu của từng tổ chức. Các nội dung liên quan đến nhiều lĩnh vực như kinh doanh, du lịch, v.v.",
    },
  ];
  return (
    <section>
      <IntroduceAptisB1 />
      <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
        <div className="mx-[10%] my-[5%]">
          <div className="my-[5%]">
            <h2 className="titleAptisB1">
              Đối tượng cần chứng chỉ tiếng Anh APTIS B1
            </h2>
            <div className="grid tablet:gap-48 phone:gap-12 laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-[3%] ">
              {listCustomers.map((item, index) => (
                <Customers item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="grid tablet:grid-cols-3 gap-24 my-[5%] phone:grid-cols-1">
            <div className="tablet:hidden">
              <Image src={pic3} alt="pic" className="row-span-1 " />
            </div>
            <div className="col-span-2 ">
              <Thoihan />
              <Cautrucdethi />
            </div>
            <div className="col-span-1 grid laptop:grid-rows-2 phone:grid-rows-1 gap-[20%] justify-end phone:gap-0">
              <Image
                src={pic3}
                alt="pic"
                className="row-span-1 tablet:grid phone:hidden"
              />
              <Image src={pic4} alt="pic" className="row-span-1" />
            </div>
          </div>
          <h2 className="title">Thông tin khóa học</h2>
          <div className="grid tablet:grid-rows-2  phone:grid-rows-3">
            <div className="tablet:row-span-1 grid tablet:grid-cols-2  phone:grid-cols-1 phone:row-span-2">
              <div className="col-span-1">
                <h2 className="titleAptisB1">KHÓA ÔN B1</h2>
                <Detail />
              </div>
              <div className="col-span-1  ">
                <div className="relative image-bottom-aptis-b1 image-top-aptis-b1 phone:my-[5%]">
                  <Image
                    src={pic5}
                    alt="pic"
                    className="object-cover rounded-[15px] z-100"
                  />
                </div>
              </div>
            </div>
            <div className="row-span-1 laptop::w-[60%] phone:w-[100%]">
              <Mota />
            </div>
          </div>
        </div>
        <DownloadDocument />
        <RegisterCourseVstep />
        <div className="mx-[10%]">
          <h2 className="title">Lộ trình học và thi</h2>
          {listStep.map((item, index) => (
            <Route item={item} key={index} />
          ))}
          <AnotherCoures />
          <FormRegister />
        </div>
      </div>
    </section>
  );
}

export default PageAptisB1;
