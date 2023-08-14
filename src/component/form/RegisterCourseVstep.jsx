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
    // <div
    //   style={{
    //     height: "193px",
    //     backgroundColor: "#FB9400",
    //     color: "white",
    //     margin: "0 auto",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "20px",
    //     justifyContent: "center",
    //     padding: "0 100px",
    //   }}
    // >
    //   <h2 style={{ fontSize: "22px", fontWeight: "700" }}>ĐĂNG KÝ KHÓA HỌC</h2>
    //   <div>
    //     <ul
    //       style={{
    //         listStyleType: "none",
    //         display: "flex",
    //         flexDirection: "row",
    //         alignItems: "center",
    //         justifyContent: "space-between",
    //       }}
    //     >
    //       {List.map((value, ind) => (
    //         <li key={ind}>
    //           <div
    //             style={{
    //               height: "60px",
    //               width: ind === List.length - 1 ? "100px" : "210px",
    //               border: "solid 1px",
    //               display: "flex",
    //               justifyContent: "flex-start",
    //               alignItems: "center",
    //               paddingLeft: "10px",
    //               color: ind === List.length - 1 ? "#FB9400" : "white",
    //               backgroundColor:
    //                 ind === List.length - 1 ? "white" : "#FB9400",
    //               borderRadius: "4px",
    //             }}
    //           >
    //             {value}
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="max-w-full px-96 bg-[#ff9400] text-white"
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
