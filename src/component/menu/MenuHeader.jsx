"use client";
import React from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, message } from "antd";
import { useRouter } from "next/navigation";

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
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7", null),
      getItem("Option 8", "8", null),
    ]),
  ]),

  getItem("LỊCH THI", "test-schedule", null),
  getItem("LỊCH ÔN TẬP", "sub4", null),
  getItem("TIN TỨC", "new", null),
  getItem("THI THỬ", "englishacademic", null),
  getItem(" ĐĂNG KÝ TƯ VẤN", "sub6", null),
];

const MenuHeader = () => {
  const router = useRouter();
  return (
    <>
      <Menu
        onClick={(e) => {
          router.push(e.key);
        }}
        className="font-[600] items-center w-[70vw] phone:hidden tablet:flex"
        mode="horizontal"
        items={items}
      ></Menu>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        className="block phone:block tablet:hidden"
      >
        <MenuOutlined className="" onClick={(e) => e.preventDefault()} />
      </Dropdown>
    </>
  );
};

export default MenuHeader;
