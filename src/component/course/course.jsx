import { Col, Row } from "antd";
import React from "react";

function Course(props) {
  return (
    <>
      <Col
        span={8}
        className="border-[1px] border-[var(--primary-color)] border-solid rounded-[5px]"
      >
        <h2 className="uppercase text-[5rem] font-[700] py-[2rem] bg-[var(--primary-color)] text-[#fff] text-center ">
          Khóa ôn B1
        </h2>
        <p className="px-[10rem] py-[5rem] h-[100rem] ">
          Nội dung khóa học : Nội dung khóa học : Nội dung khóa học : Nội dung
          khóa học : Nội dung khóa học : Nội dung khóa học : Nội dung khóa học :
          Nội dung khóa học : Nội dung khóa học : Nội dung khóa học : Nội dung
          khóa học : Nội dung khóa học : Nội dung khóa học : Nội dung khóa học :
          Nội dung khóa học : Nội dung khóa học : Nội dung khóa học : Nội dung
          khóa học : Nội dung khóa học : Nội dung khóa học : Nội dung khóa học :
          Nội dung khóa học : Nội dung khóa học :{" "}
        </p>
      </Col>
      <Col span={4}></Col>
    </>
  );
}

export default Course;
