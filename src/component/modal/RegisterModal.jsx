// import React, { useState } from "react";
// import {
//   Modal,
//   Form,
//   // MyFormItemGroup,
//   // MyFormItem,
//   Button,
//   Input,
//   Row,
//   Col,
// } from "antd";
// import Image from "next/image";
// // import logo from "/public/Rectangle 239 (1).png";
// // import { url } from "inspector";
// const RegisterModal = ({ isModalOpen, handleOk, handleCancel }) => {
//   const onFinish = async (data) => {
//     console.log(data);
//   };
//   return (
//     <>
//       <Modal
//         // title="Basic Modal"
//         open={isModalOpen}
//         // onOk={handleOk}
//         onCancel={handleCancel}
//         footer={[]}
//         width={"60%"}
//         className="max-h-[900px]"
//       >
//         <Row className=" rounded-[27px] my-20 overflow-hidden">
//           {/* <div
//             style={{ backgroundImage: "url('/public/Rectangle 239 (1).png')" }}
//           >
//             3
//           </div> */}
//           <Col className="object-cover transform-scale-x-[-1] ">
//             {/* <Image src={logo} alt="icon" height={140} width={157} /> */}
//           </Col>
//           <Col span={24} className="text-black text-left m-[15px] ">
//             <div className={`bg-[url("/logoRegister.png")] w-[100%] h-[100%]`}>
//               <h2 className="font-black text-[32px] cl">Đăng ký tư vấn</h2>
//               <p className="font-normal text-[19.4px]">
//                 E-Test sẽ liên hệ với bạn sớm nhất có thể
//               </p>
//             </div>
//           </Col>
//         </Row>
//         <Form
//           name="register"
//           className="login-form h-[100%]"
//           initialValues={{
//             remember: true,
//           }}
//           layout="vertical"
//           onFinish={onFinish}
//         >
//           <Form>
//             <Form.Item
//               name="fullName"
//               label="Họ và tên"
//               className="my-[50px]"
//               labelCol={{ span: 6 }}
//               labelAlign="left"
//             >
//               <Input className="h-[50px]" />
//             </Form.Item>
//             <Form.Item
//               name="phone"
//               label="Số điện thoại"
//               className=" my-[50px]"
//               labelCol={{ span: 6 }}
//               labelAlign="left"
//             >
//               <Input className="h-[50px] " />
//             </Form.Item>
//             <Form.Item name="email" label="Email" className=" my-[50px]">
//               <Input className="h-[50px]" />
//             </Form.Item>

//             <Form.Item
//               name="content"
//               label="Nội dung tư vấn"
//               className="my-[50px] h-[80px]"
//               labelCol={{ span: 6 }}
//             >
//               <Input.TextArea className="h-[50px]" />
//             </Form.Item>
//           </Form>

//           <Form className="flex justify-end">
//             <Button
//               type="primary"
//               htmlType="submit"
//               className=" rounded-[50px] bg-[#FB9400]"
//               onClick={(e) => console.log("e", e)}
//             >
//               Gửi thông tin
//             </Button>
//           </Form>
//         </Form>
//       </Modal>
//     </>
//   );
// };
// export default RegisterModal;

import { Modal, Form, Button, Input, Row, Col } from "antd";

import React from "react";
import Image from "next/image";
import balo from "public/zyro-image.svg";
import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
const RegisterModal = ({ isModalOpen, handleOk, handleCancel }) => {
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
          layout="vertical"
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
                pattern: /^[0-9]{10,}$/,
                message: "Số điện thoại không hợp lệ!",
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
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
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
