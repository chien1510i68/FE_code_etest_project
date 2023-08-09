'use client'
import React from "react";
import { Button, Form, Input } from "antd";
import { MailOutlined, UserOutlined , PhoneOutlined ,EnvironmentOutlined } from "@ant-design/icons";
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormRegister = () => (

  <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    className="max-w-full mx-[100px] "
  >
    <div className="grid tablet:grid-cols-2 gap-12 phone:grid-cols-1 justify-between ">
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        className=" hover:border-[#FB9400] col-span-1"
      >
        <Input
          className="border-[2px] border-solid border-[#FB9400] col-span-1 py-6 my-5 hover:border-[#FB9400] py-6"
          prefix={<UserOutlined className="site-form-item-icon mr-5" />}
          placeholder="Họ và tên"
        />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        className=""
      >
        <Input
          className="border-[2px] border-solid border-[#FB9400] py-6 my-5 hover:border-[#FB9400]"
          prefix={<PhoneOutlined className="site-form-item-icon mr-5" />}
          placeholder="Số điện thoại"
        />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        className=""
      >
        <Input
          className="border-[2px] border-solid border-[#FB9400] py-6 my-5 hover:border-[#FB9400]"
          prefix={<MailOutlined className="site-form-item-icon mr-5" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        className=""
      >
        <Input
          className="border-[2px] border-solid border-[#FB9400] py-6 my-5 hover:border-[#FB9400] font-[500]]"
          prefix={<EnvironmentOutlined className="site-form-item-icon mr-5" />}
          placeholder="Nội dung tư vấn "
        />
      </Form.Item>
    </div>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="bg-[#FB9400] block mx-auto hover:opacity-80  my-[10rem] px-[5rem]">
       Gửi thông tin 
      </Button>
    </Form.Item>
  </Form>
);

export default FormRegister;
