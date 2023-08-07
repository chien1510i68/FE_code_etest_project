import { Modal, Form, Button, Input, Row, Col } from "antd";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import Image from "next/image";
import balo from "public/zyro-image.svg";
import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
const RegisterModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const onFinish = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Modal
        // title="ĐĂNG NHẬP"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // width={500}
        className="max-h-[208px] max-w-[508px] rounded-[38px] "
        footer={[]}
      >
        <Row className="bg-[#FB9400] rounded-[27px] my-20 overflow-hidden">
          <Col span={9} className="object-cover transform-scale-x-[-1] ">
            <Image src={balo} alt="icon" height={140} width={157} />
          </Col>
          <Col span={15} className="text-white text-left my-[10px]">
            <h2 className="font-black text-[32px] cl">Đăng ký</h2>
            <p className="font-normal text-[19.4px]">
              Học tiếng anh với E-Test
            </p>
          </Col>
        </Row>
        <Form
          // name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          //   layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            // label="Họ và tên"
            name="fullName"
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { type: "text", message: "Vui lòng nhập họ và tên!" },
            ]}
          >
            <Input
              className="h-52"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="usename"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              className="h-52"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            // label="Số điện thoại"
            type=""
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                required: true,
                message: "Vui lòng nhập tài khoản.",
              },
            ]}
          >
            <Input
              className="h-52"
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Nhập số điện thoại"
            />
          </Form.Item>
          <Form.Item
            // label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu.",
              },
            ]}
          >
            <Input
              className="h-52"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Nhập số điện thoại"
            />
          </Form.Item>
         

          <Form.Item className="flex justify-end ">
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-[50px] bg-[#FB9400]"
            >
              Dăng ký
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default RegisterModal;
