import { Col, Row } from "antd";
import React from "react";

function IeltsIntro(props) {
  const { listIntroduceIelts } = props;
  return (
    <Row gutter={10} className="mx-[100px]  justify-between ">
      {listIntroduceIelts.map((item, index) => (
        <Col
          span={7}
          key={index}
          className="border-[2px]  p-[4rem]  border-solid border-primaryColor mt-[20rem]"
        >
          <img
            src={item.image}
            alt=""
            className="h-[15rem] w-[15rem] mx-auto "
          />
          <p className="text-[4.5rem] text-center font-[600] py-[2rem] uppercase ">
            {item.title}
          </p>
          <span className="text-[4rem] text-center">
           {item.description}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default IeltsIntro;
