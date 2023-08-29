"use client";
import { Dropdown } from "antd";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import MenuHeader from "@/component/menu/MenuHeader";
import ForgetPassword from "../modal/ForgetPassword";
import { useRouter } from "next/navigation";
import { AppContext } from "../AppContext/AppContext";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { data, dispatch } = useContext(AppContext);
  const router = useRouter();
  const showModalRegister = () => {
    dispatch({ type: "modalRegisterOpen" });
  };

  const showModalLogin = () => {
    dispatch({ type: "modalLoginOpen" });
  };

  const onClick = (e) => {
    console.log("Nhấp vào ");
    if (e.key == 1) {
      showModalRegister();
      // notification.success({ message: "Đã nhấp vào day la " + e.key });
    }
    if (e.key == 2) {
      showModalLogin();
      // notification.success({ message: "Đã nhấp vào day la " + e.key });
    }
  };

  const items = [
    {
      label: "Đăng ký",
      key: 1,
    },
    {
      label: "Đăng nhập",
      key: "2",
    },
    {
      label: <Link href="/user/edit-profile">Hồ sơ</Link>,
      key: "3",
    },
  ];

  return (
    <div className="mx-[auto]">
      <div>
        <div className=" flex items-center justify-around ">
          <h2 className="text-[#333] text-[24px] tablet:block phone:hidden ">
            logo
          </h2>

          <MenuHeader />

          <h2 className="text-[#333]  phone:block tablet:hidden">logo</h2>

          <div className="max-h-[7rem]">
            <Dropdown
              menu={{
                items,
                onClick,
              }}
              placement="bottom"
              arrow
            >
              <p onClick={(e) => e.preventDefault()}>
                <Image
                  src="/profile-user.png"
                  className="pl-[2rem] my-auto h-[7rem] cursor-pointer "
                  alt="sth"
                  width={36}
                  height={26}
                />
              </p>
            </Dropdown>
          </div>
        </div>
      </div>

      <RegisterModal />
      <LoginModal />
      <ForgetPassword />
      {/* <RegisterAccountModal        
      /> */}
    </div>
  );
}

export default Header;
