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
        <Carousels items={items} />
      </div>
      <div className="  mb-[5rem] max-w-[1440px] mx-[10%]">
        {/* Tin tức mới nhất của website tiếng anh  */}
        <div className="animate__animated  animate__fadeInLeft">
          <div className=" mt-[30rem] text-[#333] grid gap-12 tablet:grid-cols-2 phone:grid-cols-1">
            <div className="col-span-1">
              <h2 className="text-[6rem] font-[500] mb-[5rem]">
                GIỚI THIỆU TỔNG QUÁT VỀ <hr className="border-none" />
                <h2 className="text-[#FB9400]">TRUNG TÂM ANH NGỮ E-TEST</h2>
              </h2>
              <p className="font-[400] pr-[5%] block  text-[4rem] text-[3.5rem] line-clamp-5 h-[49rem]">
                Là nhà tiên phong với hơn 20 năm kinh nghiệm đào tạo độc quyền
                Anh ngữ Học thuật theo tiêu chuẩn của Úc tại Việt Nam, E-Test là
                Trung tâm tiếng Anh quốc tế hàng đầu chuyên giảng dạy chương
                trình Anh ngữ Học thuật và Luyện thi VSTEP, APTIS, TOEIC để
                chuẩn bị nền tảng ngôn ngữ cho việc du học và kỹ năng học tập
                trong môi trường đại học quốc tế. Không chỉ dừng lại ở việc cung
                cấp các khóa luyện thi theo hình thức học truyền thống, chúng
                tôi đã và đang triển khai nền tảng học trực tuyến. Mỗi năm,
                Edulife tiếp nhận hơn 10.000 học viên…
              </p>
              <Button className=" ml-auto px-[6rem] h-[12rem] rounded-[12rem] bg-[#FB9400] text-[#FFFFFF] hover:text-[#e7e7e8]  hover:opacity-80 border-none hover:border-none  mr-[35rem] mt-[5rem] block">
                Xem chi tiết
              </Button>
            </div>
            {/* <Col span={2}></Col> */}
            <div className="col-span-1 desktop:flex flex-row justify-end items-start   phone:hidden">
              <Image
                src="/kh_4 1.png"
                alt="pic" height={660} width={458}
              />
            </div>
          </div>
        </div>
        <div className=" mt-[25rem]">
          <h2 className="text-[8rem] font-[500] text-center mb-[10rem]  break-before-column text-[#f79500] animate__animated animate__bounce">
            Thế mạnh của chúng tôi
          </h2>
          <Row gutter={[32, 60]} className="">
            {listStrengthDescription.map((item, index) => (
              <Col className="mt-[5rem] " lg={8} md={12} sm={24} key={index}>
                <StrengthDescription item={item} />
              </Col>
            ))}
          </Row>
        </div>
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
      <div className="my-[30rem]  mb-[120px] animate__animated  animate__fadeInLeft">
        <h2 className="text-[8rem] font-[500] text-center mb-[10rem] break-before-column text-[#f79500]">
          Chương trình anh ngữ
        </h2>
        <Sliders />
      </div>
      <div className=" mt-[20rem] mb-[5rem] max-w-[1440px] mx-[10%] ">
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
          <div className=" grid tablet:grid-cols-2 gap-8 mt-[20rem] justify-around">
            <div className="col-span-1">
              <h2 className="text-[5rem] font-[500] mb-[5rem] sm:text-center">
                100+ Giảng viên tài năng
              </h2>
              <p className="font-[400] md:pr-[35rem] sm:pr-0 block leading-[6rem] text-[3.5rem] line-clamp-3 text-ellipsis sm:text-center">
                E-Test sở hữu đội ngũ giảng viên bản ngữ đến từ Anh, Úc, Mỹ có
                nhiều năm kinh nghiệm và chất lượng cao trong giảng dạy chương
                trình Anh ngữ Học thuật chuẩn Quốc Tế. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
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
              <Button className="ml-auto rounded-[2rem] bg-[#FB9400] text-[#FFFFFF] hover:text-[#e7e7e8]  hover:opacity-80 border-none hover:border-none block my-[5rem] md:hidden lg:hidden">
                Xem chi tiết
              </Button>
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
