import React from "react";
import { Col, Row } from "antd";
import {
  PhoneOutlined,
  EnvironmentFilled,
  MailOutlined,
} from "@ant-design/icons";
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
    <div className="bg-[#fff]">
      <h2 className="text-[8rem] font-[500] text-center pt-[20rem] pb-[10rem] break-before-column text-[#f79500]">
        Các đơn vị tổ chức thi và cấp chứng chỉ
      </h2>
      <Row  justify="center" gutter={12} className="flex mx-[100px] justify-center pb-[35rem]  ">
        {listImageFooter.map((item, index) => (
          <Col xs={{span : 8}} md={{span:4}}  key={index} className="h-[80px] mb-[15rem] ">
            <img className="h-full object-cover" src={item.img} alt="" />
          </Col>
        ))}

      </Row>

      <Row gutter={30} className="px-[100px] bg-[#F3F3F3] py-[20rem] ">
        <Col span={12} className="">
          <h2 className="10rem"> logo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </Col>
        <Col
          span={1}
          className="border-r-[.5rem] h-[] border-[#333] border-solid"
        ></Col>
        <Col span={10}>
          <Row gutter={30} className="text-[#333]">
            <Col
              span={24}
              className="flex justify-center items-center my-[1rem]"
            >
              {/* <PhoneOutlined className="text-[7rem] w-[20%]"  /> */}
              <h2 className="w-[30%]"> Địa chỉ</h2>
              <h2 className="w-[50%]"> +84 1234567890</h2>
            </Col>
            <Col
              span={24}
              className="flex justify-center items-center my-[1rem]"
            >
              {/* <EnvironmentFilled className="text-[7rem] w-[20%]"  /> */}
              <h2 className="w-[30%]"> Liên hệ</h2>
              <h2 className="w-[50%]"> Công ty cổ phần zzzzzz</h2>
            </Col>
            <Col
              span={24}
              className="flex justify-center items-center my-[1rem]"
            >
              {/* <MailOutlined className="text-[7rem] w-[20%]"  /> */}
              <h2 className="w-[30%]"> Email</h2>
              <h2 className="w-[50%]"> etest@gmail.com</h2>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
