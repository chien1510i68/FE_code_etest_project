"use client";
import { Modal, Form, Button, Input, Row, Col, List, Avatar } from "antd";

import React, { useState } from "react";
import Image from "next/image";
import { DownloadOutlined } from "@ant-design/icons";
// import balo from "public/world_book_fun_fb_06 [Converted]-04 1.svg";
const DownloadDocument = () => {
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

  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const showDocumentDownload = () => {
    console.log("123");
    setIsDocumentOpen(true);
  };
  const handleCancelDownload = () => {
    setIsDocumentOpen(false);
  };
  const list = [
    {
      id: 1,
      pic: "/2.jpg",
      title: "abcd",
      description: "áldjksalld",
      download: "1a",
    },
    {
      id: 2,
      pic: "/1.jpg",
      title: "abcd",
      description: "áldjksalld",
      download: "2s",
    },
    {
      id: 3,
      pic: "/5.jpg",
      title: "abcd",
      description:
        "áldjksalldsfdsfsdfsdfsdfsfffffffsdddddddddddddddddddddddddđ",
      download: "3c",
    },
    {
      id: 3,
      pic: "/5.jpg",
      title: "abcd",
      description:
        "áldjksalldsfdsfsdfsdfsdfsfffffffsdddddddddddddddddddddddddđ",
      download: "3c",
    },
  ];
  return (
    <>
      <div className="mx-[10%] my-[5%]">
        <Button
          className="custom-btn mt-[10%]"
          onClick={(e) => setIsDocumentOpen(true)}
          // isModalOpen={isDocumentOpen}
          // handleCancel={(e) => setIsDocumentOpen(false)}
        >
          Download tài liệu
        </Button>
      </div>
      <Modal
        title="DANH SÁCH TÀI LIỆU"
        open={isDocumentOpen}
        // onOk={handleOk}
        onCancel={handleCancelDownload}
        width={708}
        className="max-h-[867px] laptop:w-[790px] tablet:w-[508px] phone:w-[340px] rounded-[38px] "
        footer={[]}
      >
        <List>
          {list.map((item, ind) => (
            <List.Item key={ind}>
              <List.Item.Meta
                avatar={
                  <Image src={item.pic} alt="pic" height={96} width={139} />
                }
                title={<h2>{item.title}</h2>}
                description={item.description}
              />
              <Button className="custom-btn ml-[5%] flex items-center">
                <DownloadOutlined />
                Download
              </Button>
            </List.Item>
          ))}
        </List>
      </Modal>
    </>
  );
};
export default DownloadDocument;
