"use client";

import { Modal, Form, Button, Input, Row, Col } from "antd";
import { AppContext } from "../AppContext/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import balo from "public/zyro-image.svg";
const RegisterAccountModal = () => {
  // const onFinish = async (data) => {
  //   console.log(data);
  // authenApi
  // .login(data?.username, data?.password)
  // .then((res) => {
  //   Cookies.set("access_token", res?.data?.body?.dataRes?.accessToken);
  //   // sessionStorage.setItem(
  //   //   "accessToken",
  //   //   res?.data?.body?.dataRes?.accessToken
  //   // );

  //   if (res?.data?.body?.status === "OK") {
  //     navigate("/system/user");
  //     notification.success({ message: "Đăng nhập thành công" });
  //   } else {
  //     notification.error({ message: "Đăng nhập không thành công" });
  //   }
  // })
  // .catch((err) => {
  //   notification.error({ message: err.toString?.() });
  // });
  // };
  const { data, dispatch } = useContext(AppContext);
  const { modalRegisterAccOpen } = data;
  const onFinish = async (data) => {
    console.log(data);
    dispatch({ type: "modalRegisterAccClose" });

    //đặt thông báo gửi thông tin thành công
  };

  const handleCancel = () => {
    dispatch({ type: "modalRegisterAccClose" });
  };
  return (
    <>
      <Modal
        // title="ĐĂNG NHẬP"
        open={modalRegisterAccOpen}
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
            <h2 className="font-black text-[32px] leading-snug">
              Đăng ký tư vấn
            </h2>
            <p className="font-normal text-[19.4px]">
              E-Test sẽ liên hệ với bạn sớm nhất có thể
            </p>
          </Col>
        </Row>
        <Form
          // name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { type: "text", message: "Vui lòng nhập họ và tên!" },
            ]}
          >
            <Input className="h-52" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            type=""
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern: /^[0-9]{10,}$/,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
          >
            <Input className="h-52" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input className="h-52" />
          </Form.Item>
          <Form.Item label="Nội dung tư vấn" name="content">
            <Input.TextArea rows={5} />
          </Form.Item>

          <Form.Item className="flex justify-end ">
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-[50px] bg-[#FB9400]"
            >
              Gửi thông tin
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default RegisterAccountModal;
