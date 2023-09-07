import React from "react";
import { Col, Row } from "antd";
import {
  PhoneOutlined,
  EnvironmentFilled,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
const listImageFooter = [
  {
    img: "/đv_1.jpg",
  },
  {
    img: "/đv_2.png",
  },
  {
    img: "/đv_3.png",
  },
  {
    img: "/đv_4.png",
  },
  {
    img: "/đv_5.png",
  },
  {
    img: "/đv_6.jpg",
  },
];
function Footer() {
  return (
    <div className="bg-[#fff] mx-[auto]">
      <div className=" max-w-[1440px] mx-[10%] ">
        <h2 className="text-[8rem] font-[500] text-center pt-[20rem] pb-[10rem] break-before-column text-[#f79500]">
          Các đơn vị tổ chức thi và cấp chứng chỉ
        </h2>
        <div className=" justify-center pb-[10%] gap-12 grid tablet:grid-cols-6 phone:grid-cols-3">
          {listImageFooter.map((item, index) => (
            <div
              key={index}
              className=" relative mb-[15rem] tablet: col-span-1 phone:col-span-1 m-auto"
            >
              <Image
                className=" h-fit object-cover"
                src={item.img}
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="px-[10%] bg-[#F3F3F3] py-[10%] flex">
          <div className="">
            <h2 className="10rem"> logo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div
            span={1}
            className="border-r-[.5rem] h-[] border-[#333] border-solid"
          ></div>
          <div span={10}>
            <div gutter={30} className="text-[#333]">
              <div
                span={24}
                className="flex justify-center items-center my-[1rem]"
              >
                {/* <PhoneOutlined className="text-[7rem] w-[20%]"  /> */}
                <h2 className="w-[30%]"> Địa chỉ</h2>
                <h2 className="w-[50%]"> +84 1234567890</h2>
              </div>
              <div
                span={24}
                className="flex justify-center items-center my-[1rem]"
              >
                {/* <EnvironmentFilled className="text-[7rem] w-[20%]"  /> */}
                <h2 className="w-[30%]"> Liên hệ</h2>
                <h2 className="w-[50%]"> Công ty cổ phần zzzzzz</h2>
              </div>
              <div
                span={24}
                className="flex justify-center items-center my-[1rem]"
              >
                {/* <MailOutlined className="text-[7rem] w-[20%]"  /> */}
                <h2 className="w-[30%]"> Email</h2>
                <h2 className="w-[50%]"> etest@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
