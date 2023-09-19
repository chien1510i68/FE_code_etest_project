"use client";
import { Modal, Form, Button, Input, Row, Col } from "antd";
import { AppContext } from "../AppContext/AppContext";
import React, { useContext } from "react";

import Image from "next/image";
import balo from "public/world_book_fun_fb_06 [Converted]-04 1.svg";
const LoginModal = () => {
  const onFinish = async (data) => {
    dispatch({ type: "modalLoginClose" });
    //đặt thông báo đăng nhập thành công
  };
  const { data, dispatch } = useContext(AppContext);
  const { modalLoginOpen } = data;

  const showModalRegister = () => {
    dispatch({ type: "modalRegisterOpen" });
    dispatch({ type: "modalLoginClose" });
  };
  const handleCancel = () => {
    dispatch({ type: "modalLoginClose" });
  };
  const handleForgetPassword = () => {
    dispatch({ type: "modalForgetPasswordOpen" });
    dispatch({ type: "modalLoginClose" });
  };

  return (
    <>
      <Modal
        // title="ĐĂNG NHẬP"
        open={modalLoginOpen}
        onCancel={handleCancel}
        // width={508}
        className="max-h-[208px] tablet:w-[508px] phone:w-[340px] rounded-[38px] "
        footer={[]}
      >
        <Row className="bg-[#FB9400] rounded-[27px] my-20 overflow-hidden">
          <Col span={9} className="object-cover transform-scale-x-[-1] ">
            <Image src={balo} alt="icon" height={140} width={157} />
          </Col>
          <Col
            span={15}
            className="text-white text-left my-[10px] leading-snug"
          >
            <h2 className="font-black text-[32px] ">Đăng nhập</h2>
            <p className="font-normal text-[19.4px]">
              Học tiếng anh cùng <br></br> E-Test mỗi ngày
            </p>
          </Col>
        </Row>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản.",
              },
            ]}
          >
            <Input
              className="h-40"
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tài khoản: "
              allowClear
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu.",
              },
            ]}
          >
            <Input.Password
              className="h-40"
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu:"
              // allowClear
            />
          </Form.Item>
          <Form.Item className="flex justify-end">
            <div
              className="text-[#9E988F] underline decoration-solid decoration-[#9E988F] cursor-pointer "
              onClick={handleForgetPassword}
            >
              Quên mật khẩu?
            </div>
          </Form.Item>
          <Form.Item className="flex justify-end ">
            <Button
              type="default"
              // htmlType="submit"
              onClick={showModalRegister}
              className="mr-10 rounded-[50px]"
            >
              Đăng ký
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-[50px] bg-[#FB9400]"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default LoginModal;
