"use client";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
// import { Carousel } from "antd";
import { Button, Col, Row } from "antd";
// import 'antd/dist/antd.css';

import {
  BarsOutlined,
  CheckSquareFilled,
  FolderFilled,
  GithubOutlined,
  LikeFilled,
  UserSwitchOutlined,
} from "@ant-design/icons";
import StrengthDescription from "../component/strengDescription/StrengDescription";
import Sliders from "@/component/Slider/Slider";
import New from "@/component/news/New";
import FormRegister from "../component/form/FormRegister";
import Carousels from "@/component/slider/Carousel";
export default function Home() {
  const items = [
    {
      id: "/1.jpg",
    },
    {
      id: "/2.jpg",
    },
    {
      id: "/5.jpg",
    },
    {
      id: "/6.jpg",
    },
    {
      id: "/7.jpg",
    },
    {
      id: "/8.jpg",
    },
  ];
  const listStrengthDescription = [
    {
      icon: <BarsOutlined />,
      description:
        "Cung cấp học liệu miễn phí, bám sát cấu trúc đề. Xây dựng lộ trình học chi tiết, theo sát và hướng dẫn học viên tới khi thi đạt chứng chỉ. Đồng thời đây cũng là môi trường đào tạo truyền cảm hứng tích cực cho học viên.",
      title: "Đào tạo chất lượng ",
    },
    {
      title: "Uy tín, chuyên nghiệp",
      icon: <LikeFilled />,
      description:
        "E-Test được quản lý bởi IDP Education, tổ chức giáo dục quốc tế, có trụ sở chính tại Úc và có mặt tại hơn 32 quốc gia trên toàn cầu. IDP chuyên cung cấp các dịch vụ giảng dạy tiếng Anh và tổ chức kỳ thi IELTS trên toàn thế giới.",
    },
    {
      title: "Giáo trình hiện đại",
      icon: <FolderFilled />,
      description:
        "Giáo trình luyện thi được các chuyên gia IELTS tại Anh quốc kết hợp với các giảng viên giàu kinh nghiệm tại Trung tâm Anh ngữ E-Test thiết kế và liên tục phát triển và hoàn thiện trong nhiều năm qua.",
    },
    {
      title: "Tư vấn nhiệt tình",
      icon: <UserSwitchOutlined />,
      description:
        "Để đạt điểm cao tiếng Anh, chăm chỉ thôi chưa đủ, bạn cần có chiến lực học tập rõ ràng, xác định hành trình phải đi, đích sẽ đến. Các chuyên gia của E-Test sẽ tư vấn cho bạn lộ trình học tập riêng biệt phù hợp với khả năng của bạn.",
    },
    {
      title: "Cam kết đầu ra",
      icon: <GithubOutlined />,
      description:
        "E-Test cam kết hỗ trợ học viên thi đạt bằng hợp đồng. Học viên được hỗ trợ ôn tập đến khi thi đạt chứng chỉ. Không phát sinh thêm chi phí. Tham gia khóa học, bạn sẽ được cam kết bằng văn bản cho điểm số đầu ra của mình.",
    },
    {
      title: "Giảng viên xuất sắc",
      icon: <CheckSquareFilled />,
      description:
        "Giảng viên công tác tại các trường chuyên ngoại ngữ, kinh nghiệm coi thi, cập nhật dạng đề thi liên tục và bám sát nội dung bài thi. Được E-Test tuyển chọn qua phỏng vấn theo quy chuẩn khiêm ngặt. ",
    },
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

    <main className="bg-[#fff] mx-[auto]">
      <div className="">
      <div className="">
        <Carousels items={items} />
      </div>

      {/* Tin tức mới nhất của website tiếng anh  */}
      <div className="animate__animated  animate__fadeInLeft">
        <div className="px-[25rem] mt-[30rem] text-[#333] grid gap-12 tablet:grid-cols-2 phone:grid-cols-1">
          <div className="col-span-1">
            <h2 className="text-[6rem] font-[500] mb-[5rem]">
              GIỚI THIỆU TỔNG QUÁT VỀ <hr className="border-none" />
              <h2 className="text-[#FB9400]">TRUNG TÂM ANH NGỮ E-TEST</h2>
            </h2>
            <p className="font-[400] pr-[35rem] block  text-[4rem] text-[3.5rem] line-clamp-5 h-[49rem]">
              Là nhà tiên phong với hơn 20 năm kinh nghiệm đào tạo độc quyền Anh
              ngữ Học thuật theo tiêu chuẩn của Úc tại Việt Nam, E-Test là Trung
              tâm tiếng Anh quốc tế hàng đầu chuyên giảng dạy chương trình Anh
              ngữ Học thuật và Luyện thi VSTEP, APTIS, TOEIC để chuẩn bị nền
              tảng ngôn ngữ cho việc du học và kỹ năng học tập trong môi trường
              đại học quốc tế. Không chỉ dừng lại ở việc cung cấp các khóa luyện
              thi theo hình thức học truyền thống, chúng tôi đã và đang triển
              khai nền tảng học trực tuyến. Mỗi năm, Edulife tiếp nhận hơn
              10.000 học viên…
            </p>
            <Button className=" ml-auto px-[6rem] h-[12rem] rounded-[12rem] bg-[#FB9400] text-[#FFFFFF] hover:text-[#e7e7e8]  hover:opacity-80 border-none hover:border-none  mr-[35rem] mt-[5rem] block">
              Xem chi tiết
            </Button>
          </div>
          {/* <Col span={2}></Col> */}
          <div className="col-span-1 phone:hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt="pic"
            />
          </div>
        </div>
      </div>
      <div className="px-[25rem] mt-[25rem]">
        <h2 className="text-[8rem] font-[500] text-center mb-[10rem]  break-before-column text-[#f79500] animate__animated animate__bounce">
          Thế mạnh của chúng tôi
        </h2>
        <Row gutter={[32, 60]} className="mx-[100px]">
          {listStrengthDescription.map((item, index) => (
            <Col className="mt-[5rem] " lg={8} md={12} sm={24} key={index}>
              <StrengthDescription item={item} />
            </Col>
          ))}
        </Row>
      </div>

      {/* THống kê về công ti  */}
      <Row
        gutter={24}
        justify="space-around"
        className=" py-[10rem] bg-[#f49800] mt-[20rem]  "
      >
        <Col span={8} className="">
          <img
            // src={require("../../public/graduation.png")}
            // src='../../public/graduation.png'
            src="/graduation.png"
            alt=""
            className="w-[18rem] border-solid border-[1rem] rounded-[8px] border-[#fff] p-[4rem] mx-auto text-[#fff] "
          />

          <h2 className="text-center font-[600] text-[5rem] text-[#fff]">
            4,025 +
          </h2>
          <p className="text-center font-[400] text-[4rem] text-[#fff]">
            Học viên đạt chứng chỉ
          </p>
        </Col>
        <Col span={8} className="">
          <img
            src="/new-user.png"
            alt=""
            className="w-[18rem] border-solid border-[1rem] rounded-[8px] border-[#fff] p-[4rem] mx-auto text-[#fff] "
          />
          <h2 className="text-center font-[600] text-[5rem] text-[#fff]">
            4,025 +
          </h2>
          <p className="text-center font-[400] text-[4rem] text-[#fff]">
            Học viên đăng ký
          </p>
        </Col>
        <Col span={8} className="">
          <img
            src="/gear.png"
            alt=""
            className="w-[18rem] border-solid border-[1rem] rounded-[8px] border-[#fff] p-[4rem] mx-auto text-[#fff] "
          />
          <h2 className="text-center font-[600] text-[5rem] text-[#fff]">10</h2>
          <p className="text-center font-[400] text-[4rem] text-[#fff]">
            Năm kinh nghiệm
          </p>
        </Col>
      </Row>

      {/* Giới thiệu chương trình anh ngữ  */}
      <div className="my-[30rem] mx-[100px] mb-[120px] animate__animated  animate__fadeInLeft">
        <h2 className="text-[8rem] font-[500] text-center mb-[10rem] break-before-column text-[#f79500]">
          Chương trình anh ngữ
        </h2>
        <Sliders />
      </div>
      <div>
        <h2 className="text-[8rem] font-[500]  text-center mb-[10rem] break-before-column text-[#f79500]">
          Đăng ký tư vấn
        </h2>
        <FormRegister />
      </div>

      {/* Giới thiệu đội ngũ giảng viên  */}
      <div className="text-[#333]">
        <h2 className="text-[8rem] font-[500] text-center my-[10rem] break-before-column text-[#f79500]">
          Đội ngũ giảng viên
        </h2>
        <div className="px-[25rem] grid tablet:grid-cols-2 gap-8 mt-[20rem] justify-around">
          <div className="col-span-1">
            <h2 className="text-[5rem] font-[500] mb-[5rem] sm:text-center">
              100+ Giảng viên tài năng
            </h2>
            <p className="font-[400] md:pr-[35rem] sm:pr-0 block leading-[6rem] text-[3.5rem] line-clamp-3 text-ellipsis sm:text-center">
              E-Test sở hữu đội ngũ giảng viên bản ngữ đến từ Anh, Úc, Mỹ có
              nhiều năm kinh nghiệm và chất lượng cao trong giảng dạy chương
              trình Anh ngữ Học thuật chuẩn Quốc Tế. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <Button className=" ml-auto px-[6rem] md:h-[12rem] sm:h-[10rem] sm:hidden rounded-[2rem] bg-[#FB9400] text-[#FFFFFF] hover:text-[#e7e7e8]  hover:opacity-80 border-none hover:border-none  lg:mr-[35rem] md:mt-[5rem] lg:mt-[5rem] md:mr-auto sm:mr-auto phone:hidden block">
              Xem chi tiết
            </Button>
          </div>
          {/* <divCol span={2}></divCol> */}
          <div className="h-[60rem] col-span-1">
            <img
              src="https://images.unsplash.com/photo-1604582480408-e7401f3c18bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVjdHVyZSUyMGVuZ2xpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-full h-full object-cover rounded-[20px]"
            />
            <Button className="ml-auto rounded-[2rem] bg-[#FB9400] text-[#FFFFFF] hover:text-[#e7e7e8]  hover:opacity-80 border-none hover:border-none block my-[5rem] md:hidden lg:hidden">Xem chi tiết</Button>
          </div>
        </div>
      </div>

      {/* Tin tức của trang web */}

      <div>
        <h2 className="text-[8rem] font-[500] text-center my-[10rem] break-before-column text-[#f79500]">
          Tin tức
        </h2>
        <New newList={newList} />
      </div>
      </div>
    </main>
  );
}
