"use client";
import React from "react";
import { Button, message } from "antd";

function BtnArea(props) {
  const handleClickBtn = (index) => {
    console.log(index);
    message.info("clicked" + index);
  };

  async function getData() {
    try {
      const response = await fetch(
        "https://dc44-118-70-132-104.ngrok-free.app/exam/schedule/all"
      );
      return response.json();
    } catch (error) {}
  }

  return (
    <div>
      <div className="grid grid-cols-3 mb-[5rem] ">
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
      </div>
    </div>
  );
}

export default BtnArea;
