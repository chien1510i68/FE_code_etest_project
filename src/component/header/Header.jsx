// "use client";
// import { Button, Dropdown, Menu, message, notification, Space } from "antd";
// import Link from "next/link";
// import { useState } from "react";
// import RegisterModal from "../modal/RegisterModal";
// import LoginModal from "../modal/LoginModal";
// // import InforUserModal from "../modal/InforUserModal";
// import RegisterAccountModal from '../modal/RegisterAccountModal'
// const menus = [
//   {
//     label: <Link href="/">TRANG CHỦ</Link>,
//     // label : "Trang chu" ,
//     key: "home",
//   },
//   {
//     label: "CHƯƠNG TRÌNH ĐÀO TẠO ANH NGỮ ",
//     key: "program_english",
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           {
//             label: "Option 1",
//             key: "setting:1",
//           },
//           {
//             label: "Option 2",
//             key: "setting:2",
//           },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           {
//             label: "Option 3",
//             key: "setting:3",
//           },
//           {
//             label: "Option 4",
//             key: "setting:4",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: <Link href="/new">TIN TỨC & SỰ KIỆN</Link>,
//     // label : "tin tuc su kien"
//     key: "app",
//   },
//   {
//     label: "LỊCH THI",
//     key: "test_schedule",
//   },
//   {
//     label: "LỊCH ÔN TẬP",
//     key: "practice_schedule",
//   },
//   {
//     label: "THI THỬ",
//     key: "test",
//   },
//   {
//     label:(
//       <h2 onClick={()=>{
//         message.info("Dang nhap cai lol")
//       }}> ĐĂNG KÝ TƯ VẤN</h2>
//     ),
//     key: "register",
//   },
// ];

// function Header() {
//   const [current, setCurrent] = useState("home");
//   const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
//   const [isModalRegisterAccountOpen, setIsModalRegisterAccountOpen] = useState(false);
//   const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
//   const [isModalInforUserOpen, setIsModalInforUsernOpen] = useState(false);
//   const showModalRegister = () => {
//     // console.log("123");
//     setIsModalRegisterOpen(true);
//   };
//   const handleOkRegister = () => {
//     console.log("123");
//     // setIsModalRegisterOpen(false);
//   };
//   const handleCancelRegister = () => {
//     setIsModalRegisterOpen(false);
//   };
  
  
//   const showModalRegisterAccount = () => {
//     // console.log("123");
//     setIsModalRegisterAccountOpen(true);
//   };
//   const handleOkRegisterAccount = () => {
//     console.log("123");
//     // setIsModalRegisterOpen(false);
//   };
//   const handleCancelRegisterAccount = () => {
//     setIsModalRegisterAccountOpen(false);
//   };


//   const showModalLogin = () => {
//     setIsModalLoginOpen(true);
//   };
//   const handleOkLogin = () => {
//     setIsModalLoginOpen(false);
//   };
//   const handleCancelLogin = () => {
//     setIsModalLoginOpen(false);
//   };

//   const showModalInforUser = () => {
//     setIsModalInforUsernOpen(true);
//   };
//   const handleOkInforUser = () => {
//     setIsModalInforUsernOpen(false);
//   };
//   const handleCancelInforUser = () => {
//     setIsModalInforUsernOpen(false);
//   };
//   const onClick = (e) => {
//     console.log("Nhấp vào ");
//     if (e.key == 1) {
//       showModalRegister();
//       // notification.success({ message: "Đã nhấp vào day la " + e.key });
//     }
//     if (e.key == 2) {
//       showModalLogin();
//       // notification.success({ message: "Đã nhấp vào day la " + e.key });
//     }
//     if (e.key == 3) {
//       showModalInforUser();
//     }
//     // setCurrent(e.key);
//   };

//   const onclickMenu = (e)=>{
//     if(e.key == "register"){
//       showModalRegisterAccount();
//     }
//   }

//   // const onClick = (e) => {
//   //   message.info(`Click on item ` + e.key);
//   // };
//   const items = [
//     {
//       label: "Đăng ký",
//       key: 1,
//     },
//     {
//       label: "Đăng nhập",
//       key: "2",
//     },
//     {
//       label: "Hồ sơ",
//       key: "3",
//     },
//   ];

//   return (
//     <>
//       {/* <Button className="text-[#fff] text-3xl">Click me c </Button> */}
//       <div className="flex justify-between items-center pl-[100px] lg:24 fixed top-0	w-full z-20 bg-[#fff]">
//         <div className="text-[24px]">
//           <h2 className="text-[#333]">logo</h2>
//           {/* <Button className="text-[#fff] text-3xl" onClick={showModalRegister}>Click me c </Button> */}
//         </div>
//         <>
//           <div className=" flex items-center pr-[25rem]">
//             <Menu
//               className="font-[600] items-center w-[70vw]"
//               onClick={onclickMenu}
//               selectedKeys={[current]}
//               mode="horizontal"
//             >
//               {menus.map((item) =>
//                 item.children ? (
//                   <Menu.SubMenu key={item.key} title={item.label}>
//                     {item.children.map((subItem) => (
//                       <Menu.Item key={subItem.key} className="" onClick={(e) =>{onclickMenu}}>
//                         <Link href="/">{subItem.label}</Link>
//                       </Menu.Item>
//                     ))}
//                   </Menu.SubMenu>
//                 ) : (
//                   <Menu.Item key={item.key} className="">
//                     <Link href="/">{item.label}</Link>
//                   </Menu.Item>
//                 )
//               )}
//               {/* <h2>page</h2> */}
//             </Menu>
//             <div className="max-h-[7rem]">
//               <Dropdown
//                 menu={{
//                   items,
//                   onClick,
//                 }}
//                 placement="bottom"
//                 arrow
//               >
//                 <a onClick={(e) => e.preventDefault()}>
//                   <Image
//                     src="/profile-user.png"
//                     className="pl-[2rem] my-auto h-[7rem] cursor-pointer "
//                     alt="sth"
//                   />
//                 </a>
//               </Dropdown>
//             </div>
//           </div>
//         </>
//       </div>
//       {/* <Slider></Slider> */}

//       <RegisterModal
//         isModalOpen={isModalRegisterOpen}
//         handleCancel={handleCancelRegister}
//         handleOk={handleOkRegister}
//       />
//       <RegisterAccountModal
//         isModalOpen={isModalRegisterAccountOpen}
//         handleCancel={handleCancelRegisterAccount}
//         handleOk={handleOkRegisterAccount}
//       />
//       <LoginModal
//         isModalOpen={isModalLoginOpen}
//         handleCancel={handleCancelLogin}
//         handleOk={handleOkLogin}
//       />

//       {/* <SignUpConsultation
//         isModalOpen={isModalInforUserOpen}
//         handleCancel={handleCancelInforUser}
//         handleOk={handleOkInforUser}
//       /> */}
//     </>

    
//   );
// }

// export default Header;


"use client";
import { Button, Dropdown, Menu, message, notification, Space } from "antd";
import Link from "next/link";
import { useState } from "react";
import RegisterModal from "../modal/RegisterModal";
import LoginModal from "../modal/LoginModal";
// import InforUserModal from "../modal/InforUserModal";
import RegisterAccountModal from '../modal/RegisterAccountModal'
const menus = [
  {
    label: <Link href="/">TRANG CHỦ</Link>,
    // label : "Trang chu" ,
    key: "home",
  },
  {
    label: "CHƯƠNG TRÌNH ĐÀO TẠO ANH NGỮ ",
    key: "program_english",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: <Link href="/new">TIN TỨC & SỰ KIỆN</Link>,
    // label : "tin tuc su kien"
    key: "app",
  },
  {
    label: 
    (
      <Link href="/aptis">LỊCH THI</Link>
    ),
    key: "test_schedule",
  },
  {
    label: "LỊCH ÔN TẬP",
    key: "practice_schedule",
  },
  {
    label: "THI THỬ",
    key: "test",
  },
  {
    label:(
      <h2 onClick={()=>{
        message.info("Dang nhap cai lol")
      }}> ĐĂNG KÝ TƯ VẤN</h2>
    ),
    key: "register",
  },
];

function Header() {
  const [current, setCurrent] = useState("home");
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalRegisterAccountOpen, setIsModalRegisterAccountOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalInforUserOpen, setIsModalInforUsernOpen] = useState(false);
  const showModalRegister = () => {
    // console.log("123");
    setIsModalRegisterOpen(true);
  };
  // const handleOkRegister = () => {
  //   console.log("123");
  //   // setIsModalRegisterOpen(false);
  // };
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

  const onclickMenu = (e)=>{
    if(e.key == "register"){
      showModalRegisterAccount();
    }
  }

  // const onClick = (e) => {
  //   message.info(`Click on item ` + e.key);
  // };
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
          {/* <Button className="text-[#fff] text-3xl" onClick={showModalRegister}>Click me c </Button> */}
        </div>
        <>
          <div className=" flex items-center pr-[25rem]">
            <Menu
              className="font-[600] items-center w-[70vw]"
              onClick={onclickMenu}
              selectedKeys={[current]}
              mode="horizontal"
            >
              {menus.map((item) =>
                item.children ? (
                  <Menu.SubMenu key={item.key} title={item.label}>
                    {item.children.map((subItem) => (
                      <Menu.Item key={subItem.key} className="" onClick={(e) =>{onclickMenu}}>
                        <Link href="/">{subItem.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={item.key} className="">
                    <Link href="/">{item.label}</Link>
                  </Menu.Item>
                )
              )}
              {/* <h2>page</h2> */}
            </Menu>
            <div className="max-h-[7rem]">
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
                placement="bottom"
                arrow
              >
                <a onClick={(e) => e.preventDefault()}>
                  <img
                    src="/profile-user.png"
                    className="pl-[2rem] my-auto h-[7rem] cursor-pointer "
                    alt="sth"
                  />
                </a>
              </Dropdown>
            </div>
          </div>
        </>
      </div>
      {/* <Slider></Slider> */}

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

      {/* <SignUpConsultation
        isModalOpen={isModalInforUserOpen}
        handleCancel={handleCancelInforUser}
        handleOk={handleOkInforUser}
      /> */}
    </>

    
  );
}

export default Header;
