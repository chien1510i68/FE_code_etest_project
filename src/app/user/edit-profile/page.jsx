"use client";
import {
  Button,
  Col,
  Form,
  Modal,
  Row,
  Skeleton,
  Input,
  DatePicker,
} from "antd";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarOutlined } from "@ant-design/icons";
import avatar from "public/Button.svg";
import Link from "next/link";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function PageUserProfile(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const onPickdate = (date, dateString) => {
    setSelectedDate(dateString);
    console.log(dateString);
    console.log("date", date);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log({ ...values, dateOfBirth: selectedDate });
  };
  // useEffect(() => {
  //   onFinish();
  // }, [selectedDate]);

  const handleSubmit = async (value) => {
    console.log("object value", value);
    // Thực hiện chức năng của nút "Submit" tại đây
    userApi
      .update({ ...value, usrUid: check })
      .then((response) => {
        dispatch({ type: "updateUser", payload: value });

        console.log("object val", value);
        console.log("object id", check);
        if (response?.data?.body?.status === "OK") {
          notification.success({
            message: "Cập nhật người dùng thành công",
          });
        } else {
          notification.error({
            message: "Cập nhật người dùng không thành công",
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mt-[45px] flex justify-center">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-[187.5rem] h-[207rem] mx-[100px] bg-white border-2 border-solid border-[#808080/40]"
      >
        <div className="grid gap-12 tablet:grid-cols-3  phone:grid-cols-1 flex-row items-center justify-evenly ">
          <Image
            src={avatar}
            alt="avatar"
            height={150}
            width={150}
            className="col-span-1 phone:mx-auto"
          />
          <button className="custom-btn mr-[4rem] block px-[3rem] phone:mx-auto phone:w-[60%] tablet:w-full col-span-1 ">
            Tải ảnh đại diện mới
          </button>
          <button className="custom-btn  px-[3rem] phone:mx-auto phone:w-[60%] tablet:w-full  col-span-1">
            <Link href="/user/edit-account">Đổi mật khẩu</Link>
          </button>
        </div>
        <div className="flex justify-between flex-wrap mx-[10rem]">
          <Form.Item
            label="Họ và tên:"
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy nhập họ và tên của bạn!",
              },
            ]}
            className="w-[100%] hover:border-[#FB9400] "
          >
            <Input
              className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400]  "
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
            className="w-[100%]"
            label="Email:"
          >
            <Input
              className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400]"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern: /^[0-9]{10,}$/,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
            className="w-[100%]"
            label="Số điện thoại:"
          >
            <Input
              className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400]"
              allowClear
              // prefix={<PhoneOutlined className="site-form-item-icon mr-5" />}
            />
          </Form.Item>

          {/* <Form.Item
            name="dateOfBirth"
            rules={[
              {
                required: true,
                message: "Hãy nhập ngày sinh của bạn!",
              },
            ]}
            className="w-[100%]"
            label="Ngày sinh:"
          >
            <Input
              className="border-[1px] border-solid border-[#808080] py-6 my-6 hover:border-[#FB9400] font-[500]]"
              // prefix={<EnvironmentOutlined className="site-form-item-icon mr-5" />}
              suffix={<CalendarOutlined />}
            />
          </Form.Item> */}

          <Form.Item
            // name="dateOfBirth"
            rules={[
              {
                required: true,
                message: "Hãy nhập ngày sinh của bạn!",
              },
            ]}
            className="w-[100%]"
            label="Ngày sinh:"
          >
            <DatePicker
              onChange={onPickdate}
              className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400] font-[500]] w-full"
            />
          </Form.Item>

          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Hãy nhập địa chỉ của bạn!",
              },
            ]}
            className="w-[100%]"
            label="Địa chỉ:"
          >
            <Input
              className="border-[1px] border-solid border-[#808080/40] py-6 my-6 hover:border-[#FB9400] font-[500]]"
              allowClear
            />
          </Form.Item>
        </div>

        <div className="flex justify-end mr-[10rem] ">
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
  );
}

export default PageUserProfile;
