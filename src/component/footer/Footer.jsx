import React from "react";
import { Col, Row } from "antd";
import {
  PhoneOutlined,
  EnvironmentFilled,
  MailOutlined,
} from "@ant-design/icons";
function Footer() {
  return (
    <div className="bg-[#fff]">
      <h2 className="text-[8rem] font-[500] text-center pt-[20rem] pb-[10rem] break-before-column text-[#f79500]">
        Các đơn vị tổ chức thi và cấp chứng chỉ
      </h2>
      <Row gutter={0} className="px-[100rem] pb-[35rem] ">
        <Col span={4} className="max-h-[20rem]">
          {/* <h1>imge 01 </h1> */}
          <img className="h-full object-cover" src="/đv_1.jpg" alt="" />
        </Col>
        <Col span={4} className="max-h-[20rem]">
          {/* <h1>imge 01 </h1> */}
          <img className="h-full object-cover" src="/đv_2.png" alt="" />
        </Col>
        <Col span={4} className="max-h-[20rem]">
          {/* <h1>imge 01 </h1> */}
          <img className="h-full object-cover" src="/đv_3.png" alt="" />
        </Col>
        <Col span={4} className="max-h-[20rem]">
          {/* <h1>imge 01 </h1> */}
          <img className="h-full object-cover" src="/đv_4.png" alt="" />
        </Col>
        <Col span={4} className="max-h-[20rem]">
          {/* <h1>imge 01 </h1> */}
          <img className="h-full object-cover" src="/đv_5.png" alt="" />
        </Col>
        <Col span={4} className="max-h-[20rem]">
          {/* <h1>imge 01 </h1> */}
          <img className="h-full object-cover" src="/đv_6.jpg" alt="" />
        </Col>
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
