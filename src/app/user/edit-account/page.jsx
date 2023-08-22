"use client";
import Image from "next/image";
import React from "react";
import pic from "public/changePassword.png";
import { Button, Form, Input } from "antd";

function PageEditAccount(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
      <div className=" flex mx-[10%] ">
        <Image
          src={pic}
          alt="pic"
          width={532}
          height={957}
          className="tablet:block hidden"
        />

        <div>
          <div className="my-[10%] flex justify-center">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              className=" w-[176.25rem] mx-[10%] bg-white border-2 border-solid border-[#808080/40]"
            >
              <div className="flex flex-row items-center justify-evenly text-[8rem] font-medium leading-[6rem] py-[10rem]">
                Đổi mật khẩu
              </div>
              <div className="flex justify-between flex-wrap mx-[10rem]">
                <Form.Item
                  label="Mật khẩu cũ"
                  name="oldPassword"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập mật khẩu hiện tại của bạn!",
                    },
                  ]}
                  className="w-[100%] hover:border-[#FB9400] "
                >
                  <Input.Password
                    className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400]  "
                    allowClear
                    type="password"
                  />
                </Form.Item>
                <Form.Item
                  label="Mật khẩu mới"
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập mật khẩu mới của bạn!",
                    },
                  ]}
                  className="w-[100%] hover:border-[#FB9400] "
                >
                  <Input.Password
                    className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400]  "
                    allowClear
                    type="password"
                  />
                </Form.Item>
                <Form.Item
                  label="Xác nhận lại mật khẩu"
                  name="newPassword2"
                  rules={[
                    {
                      required: true,
                      message: "Xác nhận lại mật khẩu mới của bạn!",
                    },
                  ]}
                  className="w-[100%] hover:border-[#FB9400] "
                >
                  <Input.Password
                    className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400]  "
                    allowClear
                    type="password"
                  />
                </Form.Item>
              </div>

              <div className="flex justify-end mr-[10rem] mb-[5%] ">
                <Button
                  type="default"
                  // htmlType="submit"
                  className=" hover:opacity-80   mr-[4rem] px-[5rem]"
                >
                  Hủy
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#FB9400]  hover:opacity-80  px-[5rem]"
                  // onClick={handleSubmit}
                >
                  Cập nhật
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageEditAccount;
