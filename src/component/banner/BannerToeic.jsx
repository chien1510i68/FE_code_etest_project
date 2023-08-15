/* eslint-disable @next/next/no-img-element */
// "use server"
import { Button, Col, Row } from "antd";
import React from "react";

function BannerToeic(props) {
  // return (
  //   <>
  //     <Row className="border-b-[2rem] border-b-solid border-b-primaryColor">
  //       <Col span={12}>
  //         <img
  //           src="/ctr_5.jpg"
  //           className="w-full object-cover border-r-[2rem] border-r-solid border-r-primaryColor"
  //           alt=""
  //         />
  //       </Col>
  //       <Col className="bg-[#FFF4E5] text-left " span={12}>
  //         <div className="block-center left-[40%]">
  //           <h2 className="font-[500] text-[8rem] text-[#000000] ">
  //             Luyện thi toeic
  //           </h2>
  //           <p className="leading-[9rem] font-[400] text-[4rem]">
  //             TOEIC (Test of English for International Communication) – Bài kiểm
  //             tra tiếng Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc
  //             tế về giao tiếp dành cho người đi làm không phải là người sử dụng
  //             tiếng Anh làm tiếng mẹ đẻ, đặc biệt là những đối tượng muốn sử
  //             dụng tiếng Anh trong môi trường giao tiếp và làm việc quốc tế.
  //           </p>
  //           <Button className="custom-btn mt-[2rem] uppercase">
  //             đăng ký tư vấn
  //           </Button>
  //         </div>
  //       </Col>
  //     </Row>
  //   </>
  // );

  return (
    <div className="grid gap-12 tablet:grid-cols-2 phone:grid-col-1 border-b-[2rem] border-b-solid border-b-primaryColor ">
      <div className="col-span-1 max-h-[500px] phone: tablet:block border-r-[2rem] border-r-solid border-r-primaryColor">
        <img src="/16 (1).jpg" className="w-full h-full object-cover " alt="" />
      </div>

      <div className="col-span-1 ">
        <div className="bg-[#FFF4E5] pt-[25rem]  h-full ">
          <h2 className="pb-[5rem] block px-[20rem] font-[500] text-[8rem]">
            Luyện thi toeic
          </h2>
          <p className="py-auto block px-[20rem] font-[400] text-[4rem]">
            TOEIC (Test of English for International Communication) – Bài kiểm
            tra tiếng Anh giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc tế
            về giao tiếp dành cho người đi làm không phải là người sử dụng tiếng
            Anh làm tiếng mẹ đẻ, đặc biệt là những đối tượng muốn sử dụng tiếng
            Anh trong môi trường giao tiếp và làm việc quốc tế.
          </p>
          <Button className="ml-auto block my-[10rem] mr-[20rem] bg-[#FB9400] shadow-md hover:scale-[1.1] text-[#fff] hover:border-none border-none ">
            {" "}
            Đăng ký tư vấn
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerToeic;
