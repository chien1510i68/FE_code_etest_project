"use client";
import { Modal, Form, Button, Input, Row, Col, List, Avatar } from "antd";

import React, { useState } from "react";
import Image from "next/image";
import { DownloadOutlined } from "@ant-design/icons";
// import balo from "public/world_book_fun_fb_06 [Converted]-04 1.svg";
const DownloadDocument = () => {
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const showDocumentDownload = () => {
    console.log("123");
    setIsDocumentOpen(true);
  };
  const handleCancelDownload = () => {
    setIsDocumentOpen(false);
  };
  const [expanded, setExpanded] = useState(false);
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
      description:
        "Chào mừng bạn đến với chuyên mục Tiếng Anh B2 trên trang web của chúng tôi! Đây là nơi dành riêng cho những người đã có khả năng tiếng Anh ở mức độ trung bình trên (B2) và muốn tiến xa hơn trong việc nâng cao kỹ năng giao tiếp và hiểu biết ngôn ngữ này.Chuyên mục này sẽ giúp bạn xây dựng và mở rộng kiến thức tiếng Anh của mình với những nội dung đa dạng và thú vị. Tại đây, bạn sẽ tìm thấy các bài viết, bài thảo luận, và tài liệu học được thiết kế đặc biệt để đáp ứng nhu cầu của những người đang ở mức trình độ B2.",
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
                description={
                  expanded
                    ? item.description
                    : item.description.slice(0, 100) + "..."
                }
              />
              {item.description.length > 100 && (
                <Button onClick={() => setExpanded(!expanded)}>
                  {expanded ? "Rút gọn" : "Xem thêm"}
                </Button>
              )}
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
