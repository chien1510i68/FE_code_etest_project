"use client";
import { Modal, Form, Button, Input, Row, Col, List, Avatar } from "antd";
import { AppContext } from "../AppContext/AppContext";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { DownloadOutlined } from "@ant-design/icons";
import { getAllDocument } from "@/api/apiDocument";

const DownloadDocument = () => {
  const { data, dispatch } = useContext(AppContext);
  const { modalDownloadOpen, listDataDocument } = data;
  console.log("listDataDocument:: ", listDataDocument);

  const showDocumentDownload = async () => {
    dispatch({ type: "modalDownloadOpen" });

    const res = await getAllDocument().then((data) => data);
    console.log("res:: ", res?.data?.items);
    dispatch({ type: "getDocument", payload: res?.data?.items });
  };

  const handleCancelDownload = () => {
    dispatch({ type: "modalDownloadClose" });
  };
  // const expandContent = () => {
  //   dispatch({ type: "documentExpand" });
  // };
  // const compactContent = () => {
  //   dispatch({ type: "documentCompact" });
  // };

  const [expandedItems, setExpandedItems] = useState({});
  const toggleExpand = (itemID) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemID]: !prev[itemID],
    }));
  };
  // const download = () => {};

  return (
    <>
      <div className="mx-[10%] my-[5%]">
        <Button
          className="custom-btn mt-[10%]"
          onClick={showDocumentDownload}
          // isModalOpen={isDocumentOpen}
          // handleCancel={(e) => setIsDocumentOpen(false)}
        >
          Download tài liệu
        </Button>
      </div>
      <Modal
        title="DANH SÁCH TÀI LIỆU"
        open={modalDownloadOpen}
        // onOk={handleOk}
        onCancel={handleCancelDownload}
        width={708}
        className="max-h-[867px] laptop:w-[790px] tablet:w-[508px] phone:w-[340px] rounded-[38px] "
        footer={[]}
      >
        <List>
          {listDataDocument.map((item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                  <Image src={item.image} alt="pic" height={96} width={139} />
                }
                title={<h2>{item.name}</h2>}
                description={
                  expandedItems[item.id]
                    ? item.content
                    : item.content.slice(0, 50) + "..."
                }
              />

              {item.content.length > 50 && (
                <Button onClick={() => toggleExpand(item.id)}>
                  {expandedItems[item.id] ? "Rút gọn" : "Xem thêm"}
                </Button>
              )}
              <Button
                href={item.file}
                className="custom-btn ml-[5%] flex items-center"
              >
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
