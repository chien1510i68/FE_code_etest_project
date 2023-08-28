"use client";
import { AppContext } from "../AppContext/AppContext";
import React, { useState, useContext } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, message } from "antd";
import { useRouter } from "next/navigation";
import RegisterAccountModal from "../modal/RegisterAccountModal";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("TRANG CHỦ", "/", null),
  getItem("CHƯƠNG TRÌNH ĐÀO TẠO ANH NGỮ", "ielts", null, [
    getItem("Luyện thi TOEIC", "/toeic", null),
    getItem("Luyện thi IELTS", "/ielts", null),
    getItem("Luyện thi Aptis", "/aptis", null, [
      getItem("Luyện thi Aptis B1", "/aptis/luyen-thi-b1", null),
      getItem("Luyện thi Aptis B2", "/aptis/luyen-thi-b2", null),
    ]),
    getItem("Luyện thi VStep", "/vstep", null, [
      getItem("Luyện thi B1", "/vstep/luyen-thi-b1", null),
      getItem("Luyện thi B2", "/vstep/luyen-thi-b2", null),
    ]),
    getItem("Anh Ngữ Học Thuật", "/englishacademic", null),
  ]),

  getItem("LỊCH THI", "/test-schedule", null),
  getItem("LỊCH ÔN TẬP", "sub4", null),
  getItem("TIN TỨC", "/new", null),
  getItem("THI THỬ", "englishacademic", null),
  getItem(" ĐĂNG KÝ TƯ VẤN", "sub6", null),
];

const MenuHeader = () => {
  const { data, dispatch } = useContext(AppContext);

  const showModalRegisterAcc = () => {
    dispatch({ type: "modalRegisterAccOpen" });
  };
  const router = useRouter();
  return (
    <>
      <Menu
        onClick={(e) => {
          if (e.key == "sub6") {
            showModalRegisterAcc();
            // notification.success({ message: "Đã nhấp vào day la " + e.key });
          } else {
            router.push(e.key);
          }
        }}
        className="font-[600] items-center w-[70vw] phone:hidden tablet:flex"
        mode="horizontal"
        items={items}
      ></Menu>
      {/* <h2>this is the test </h2> */}
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        className="block phone:block tablet:hidden"
      >
        <MenuOutlined className="" onClick={(e) => e.preventDefault()} />
      </Dropdown>
      <RegisterAccountModal />
    </>
  );
};

export default MenuHeader;
