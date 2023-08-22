"use client";
import { Modal, Form, Button, Input, Row, Col } from "antd";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import Image from "next/image";
import balo from "public/zyro-image.svg";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
const RegisterModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const onFinish = async (data) => {
    console.log(data);
  };

  const handleOkRegister = () => {
    console.log("123");
    // setIsModalRegisterOpen(false);
  };

  return (
    <>
      <Modal
        // title="ĐĂNG NHẬP"
        open={isModalOpen}
        onOk={handleOkRegister}
        onCancel={handleCancel}
        // width={500}
        className="max-h-[208px] tablet:w-[508px] phone:w-[340px] rounded-[38px] "
        footer={[]}
      >
        <Row className="bg-[#FB9400] rounded-[27px] my-20 overflow-hidden">
          <Col span={9} className="object-cover transform-scale-x-[-1] ">
            <Image src={balo} alt="icon" height={140} width={157} />
          </Col>
          <Col span={15} className="text-white text-left my-[10px]">
            <h2 className="font-black text-[32px] leading-snug">Đăng ký</h2>
            <p className="font-normal text-[19.4px]">
              Học tiếng anh với E-Test
            </p>
          </Col>
        </Row>
        <Form
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              { required: true, message: "Vui lòng nhập tên tài khoản!" },
              { type: "text", message: "Vui lòng nhập tên tài khoản!" },
            ]}
          >
            <Input
              className="h-52"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên tài khoản"
            />
          </Form.Item>
          <Form.Item
            name="passWord"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input
              className="h-52"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item
            type=""
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input
              className="h-52"
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Số điện thoại"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input
              className="h-52"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item className="flex justify-end ">
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-[50px] bg-[#FB9400]"
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default RegisterModal;
