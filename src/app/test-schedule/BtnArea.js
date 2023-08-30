// "use client";
import React from "react";
import { Button, message, Tabs } from "antd";
import { getAllExamSchedule } from "@/api/apiExam";
function BtnArea(props) {
  // const handleClickBtn = (index) => {
  //   console.log(index);
  //   message.info("clicked" + index);
  // };
  async function getDataArea() {
    const data = await getAllExamSchedule();

    const items = data?.data?.items?.map((item) => {
      console.log("item::", item);
    });
  }

  // getDataArea();

  return (
    <div>
      {/* <div className="grid grid-cols-3 mb-[5rem] ">
        <Button
          onClick={() => {
            handleClickBtn(1);
          }}
          className="col-span-1 uppercase font-medium"
        >
          khu vực miền bắc
        </Button>
        <Button
          onClick={() => {
            handleClickBtn(2);
          }}
          className="col-span-1 uppercase font-medium"
        >
          khu vực miền nam
        </Button>
        <Button
          onClick={() => {
            handleClickBtn(3);
          }}
          className="col-span-1 uppercase font-medium"
        >
          khu vực miền trung{" "}
        </Button>
      </div> */}
      {/* <Tabs
        defaultActiveKey="1"
        centered
        items=
          [
            label: `Khu Vực ${item.nameArea}`,
            key: item.areaId,
            children: `Content of Tab Pane ${id}`,
          ]
        
      /> */}
    </div>
  );
}

export default BtnArea;
