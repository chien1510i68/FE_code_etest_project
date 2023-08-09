// "use server"
import { Button, Col, Row } from "antd";
import React from "react";

function BannerToeic(props) {
  return (
    <>
      <Row className="border-b-[2rem] border-b-solid border-b-primaryColor">
        <Col span={12}>
          <img src="/ctr_5.jpg" className="w-full object-cover border-r-[2rem] border-r-solid border-r-primaryColor" alt="" />
        </Col>
        <Col className="bg-[#FFF4E5] text-left " span={12}>
          <div className="block-center left-[40%]">
            <h2 className="font-[500] text-[8rem] text-[#000000] ">Luyện thi toeic</h2>
            <p className="leading-[9rem] font-[400] text-[4rem]">
              TOEIC (Test of English for International Communication) – Bài kiểm
              tra tiếng Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc
              tế về giao tiếp dành cho người đi làm không phải là người sử dụng
              tiếng Anh làm tiếng mẹ đẻ, đặc biệt là những đối tượng muốn sử
              dụng tiếng Anh trong môi trường giao tiếp và làm việc quốc tế.
            </p>
            <Button className="custom-btn mt-[2rem] uppercase">đăng ký tư vấn</Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default BannerToeic;
