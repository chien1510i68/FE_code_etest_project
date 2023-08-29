// "use client";
import React from "react";
import { Collapse } from "antd";
import BtnArea from "./BtnArea";

async function getData() {
  try {
    const response = await fetch(
      "https://dc44-118-70-132-104.ngrok-free.app/exam/schedule/all"
    );
    return response.json();
  } catch (error) {}
}

async function Area() {
  const data = await getData();
  // console.log(data.data.items);
  const items = data.data.items.map((item) => {
    return {
      key: item.schoolId,
      label: item.nameExamSchool,
      children: (
        <div className="px-[3rem]">
          <p>
            <b>Hình thức thi : </b>
            {item.examMethod}
          </p>
          <p>
            <b>Đối tượng dự thi : </b>
            {item.examinationObject}
          </p>
          <p>
            <b>Lệ phí dự thi : </b>
            {item.examinationFee}
          </p>

          <p>
            <b>Hố sơ đăng ký : </b>
            {item.examinationFee}
          </p>
          <p>
            <b>Thời gian cấp chứng nhận :</b>
            {item.certificationTime}
          </p>
        </div>
      ),
    };
  });
  console.log(items);
  return (
    <div>
      <BtnArea />

      <>
        <Collapse accordion items={items} />
      </>
    </div>
  );
}

export default Area;
