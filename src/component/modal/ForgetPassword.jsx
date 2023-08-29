"use client";
import { Modal, Form, Button, Input, Row, Col } from "antd";
import { AppContext } from "../AppContext/AppContext";
import React, { useContext } from "react";

import Image from "next/image";
import balo from "public/world_book_fun_fb_06 [Converted]-04 1.svg";
const ForgetPassword = () => {
  const onFinish = async (data) => {
    console.log(data);
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

    console.log("123");
    dispatch({ type: "modalLoginClose" });
    //đặt thông báo đăng nhập thành công
  };
  const { data, dispatch } = useContext(AppContext);
  const { modalForgetPasswordOpen } = data;

  console.log("modalForgetPasswordOpen: ", modalForgetPasswordOpen);
  const handleCancel = () => {
    dispatch({ type: "modalForgetPasswordClose" });
  };

  return (
    <>
      <Modal
        // title="ĐĂNG NHẬP"
        open={modalForgetPasswordOpen}
        onCancel={handleCancel}
        // width={508}
        className="max-h-[208px] tablet:w-[508px] phone:w-[340px] rounded-[38px] "
        footer={[]}
      >
        <Row className="bg-[#FB9400] rounded-[27px] my-20 overflow-hidden">
          <Col span={9} className="object-cover transform-scale-x-[-1] ">
            <Image src={balo} alt="icon" height={140} width={157} />
          </Col>
          <Col span={15} className="text-white text-left my-[auto] ">
            <h2 className="font-black text-[32px]  ">Quên mật khẩu?</h2>
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
          <h3 className="my-[3%] mx-auto">
            Nhập vào email hoặc số điện thoại của bạn để lấy lại mật khẩu.
          </h3>
          <Form.Item
            name="forgetPassword"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email hoặc số điện thoại của bạn.",
              },
            ]}
          >
            <Input
              className="h-40"
              // prefix={<UserOutlined className="site-form-item-icon" />}
              // placeholder="Tài khoản: "
              allowClear
            />
          </Form.Item>

          <Form.Item className="flex justify-end ">
            <Button
              type="default"
              // htmlType="submit"
              onClick={handleCancel}
              className="mr-10 rounded-[50px]"
            >
              Hủy
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-[50px] bg-[#FB9400]"
            >
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ForgetPassword;
