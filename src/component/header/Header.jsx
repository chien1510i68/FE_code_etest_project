

"use client";
import { Dropdown } from "antd";
import { useState } from "react";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import MenuHeader from '@/component/menu/MenuHeader';
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
    <>
      {/* <Button className="text-[#fff] text-3xl">Click me c </Button> */}
      <div className="flex justify-between items-center pl-[100px] lg:24 fixed top-0	w-full z-20 bg-[#fff]">
        <div className="text-[24px]">
          <h2 className="text-[#333]">logo</h2>
        </div>
        <>
          <div className=" flex items-center pr-[25rem]">
         

            <MenuHeader/>

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
        </>
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

     
    </>
  );
}

export default Header;
