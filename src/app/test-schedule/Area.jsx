// "use client";
import React from "react";
import { Collapse, Tabs } from "antd";
import BtnArea from "./BtnArea";
import { getAllExamSchedule } from "@/api/apiExam";

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://d123-118-70-132-104.ngrok-free.app/exam/schedule/all"
//     );
//     return response.json();
//   } catch (error) {}
// }

async function Area() {
  const data = await getAllExamSchedule();

  // let items = null;
  // if (res?.data?.success) {
  // console.log("data sche:::", data);
  // console.log("menu: ", data?.data?.data?.items);
  const items = data?.data?.items?.map((item) => {
    console.log("item::", item);
    return {
      key: item.id.toString(),
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
  // }
  // console.log(items);
  return (
    <div>
      {/* <BtnArea /> */}

      <>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Tab 1",
              key: "1",
              children: <Collapse accordion items={items} />,
            },
            {
              label: "Tab 2",
              key: "2",
              children: <Collapse accordion items={items} />,
            },
            {
              label: "Tab 3",
              key: "3",
              children: <Collapse accordion items={items} />,
            },
          ]}
        />
      </>
    </div>
  );
}

export default Area;
