import { Button, Col, Row } from "antd";
import React from "react";

function Course({item}) {
  return (
    <>
      <Col
        span={10}
        className="border-[1px] border-primaryColor border-solid rounded-[5px]"
      >
        <h2 className="uppercase text-[5rem] font-[700] py-[2rem] bg-primaryColor text-[#fff] text-center ">
         {item.title}
        </h2>
        <p className="px-[10rem] py-[5rem] h-[100rem] ">
        {item.content}
        </p>
        <Button className="mx-auto block mb-[5rem] bg-primaryColor custom-btn uppercase hover:text-[#fff]">Đăng ký học </Button>
      </Col>
      <Col span={2}></Col>
    </>
  );
}

export default Course;
