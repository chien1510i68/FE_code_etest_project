"use client";
import React from "react";
import { Button, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function RegisterCourseVstep(props) {
  return (
    <>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="max-w-full px-[10%] bg-[#ff9400] text-white"
      >
        <h2 className="py-6  font-bold">ĐĂNG KÝ KHÓA HỌC</h2>
        <div className="grid tablet:grid-cols-5 gap-10 phone:grid-cols-1 justify-between  ">
          <Form.Item
            name="username"
            className=" hover:border-[#FB9400] bg-[#FB9400] col-span-1 "
          >
            <Input
              className="border-[2px] border-solid border-white bg-[#FB9400]col-span-1 py-6 my-5 hover:border-[#FB9400] py-6"
              placeholder="Họ và tên"
            />
          </Form.Item>

          <Form.Item name="phoneNumber">
            <Input
              className="border-[2px] border-solid border-white  py-6 my-5 hover:border-[#FB9400]"
              placeholder="Số điện thoại"
            />
          </Form.Item>
          <Form.Item name="email">
            <Input
              className="border-[2px] border-solid border-white  py-6 my-5 hover:border-[#FB9400]"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item name="content">
            <Input
              className="border-[2px] border-solid border-white  py-6 my-5 hover:border-[#FB9400] "
              placeholder="Nội dung tư vấn "
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              id="button-register"
              className="bg-white  text-[#FB9400] border-[2px] border-solid border-white  py-6 my-5 hover:border-[#FB9400] font-medium"
            >
              ĐĂNG KÝ
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
}

export default RegisterCourseVstep;
