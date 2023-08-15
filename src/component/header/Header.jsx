"use client";
import { Dropdown } from "antd";
import { useState } from "react";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import MenuHeader from "@/component/menu/MenuHeader";
import RegisterAccountModal from "../modal/RegisterAccountModal";

function Header() {
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalRegisterAccountOpen, setIsModalRegisterAccountOpen] =
    useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalInforUserOpen, setIsModalInforUsernOpen] = useState(false);
  const showModalRegister = () => {
    // console.log("123");
    setIsModalRegisterOpen(true);
  };

  const handleCancelRegister = () => {
    setIsModalRegisterOpen(false);
  };

  const showModalRegisterAccount = () => {
    // console.log("123");
    setIsModalRegisterAccountOpen(true);
  };
  const handleOkRegisterAccount = () => {
    console.log("123");
    // setIsModalRegisterOpen(false);
  };
  const handleCancelRegisterAccount = () => {
    setIsModalRegisterAccountOpen(false);
  };

  const showModalLogin = () => {
    setIsModalLoginOpen(true);
  };
  const handleOkLogin = () => {
    setIsModalLoginOpen(false);
  };
  const handleCancelLogin = () => {
    setIsModalLoginOpen(false);
  };

  const showModalInforUser = () => {
    setIsModalInforUsernOpen(true);
  };
  const handleOkInforUser = () => {
    setIsModalInforUsernOpen(false);
  };
  const handleCancelInforUser = () => {
    setIsModalInforUsernOpen(false);
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
    if (e.key == 3) {
      showModalInforUser();
    }
    // setCurrent(e.key);
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
      label: "Hồ sơ",
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
                <img
                  src="/profile-user.png"
                  className="pl-[2rem] my-auto h-[7rem] cursor-pointer "
                  alt="sth"
                />
              </p>
            </Dropdown>
          </div>
        </div>
      </div>

      <RegisterModal
        isModalOpen={isModalRegisterOpen}
        handleCancel={handleCancelRegister}
        // handleOk={handleOkRegister}
      />
      <RegisterAccountModal
        isModalOpen={isModalRegisterAccountOpen}
        handleCancel={handleCancelRegisterAccount}
        handleOk={handleOkRegisterAccount}
      />
      <LoginModal
        isModalOpen={isModalLoginOpen}
        handleCancel={handleCancelLogin}
        handleOk={handleOkLogin}
      />
    </div>
  );
}

export default Header;
