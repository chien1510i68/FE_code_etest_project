import { Col } from "antd";
import React from "react";

const ExamStructureVstepB2 = ({ examSructureVstepB2 }) => {
  return (
    <div className="">
      {examSructureVstepB2.map((item, ind) => (
        <div
          key={ind}
          className="border-[1px]  border-solid rounded-[5px] col-span-2"
        >
          <div>
            <p className="">{item.title} </p>
            <span className="text-[4rem]">{item.content} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamStructureVstepB2;
