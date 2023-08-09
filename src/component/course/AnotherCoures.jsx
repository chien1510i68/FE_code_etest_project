import React from "react";
import pic9 from "public/kh_9.jpg";
import pic13 from "public/13.jpg";
import pic15 from "public/15.jpg";
import pic11 from "public/kh_11.jpg";
import Image from "next/image";
import { Col, Row } from "antd";

function AnotherCoures(props) {
  const list = [
    { pic: pic9, title: "Luyện thi IELTS" },
    { pic: pic13, title: "Luyện thi APTIS" },
    { pic: pic11, title: "Luyện thi TOEIC" },
    { pic: pic15, title: "Anh ngữ học thuật" },
  ];
  return (
    <div className="flex flex-col items-center block mx-auto">
      <h2 className="title">Các chương trình học khác</h2>
      <div>
        <Row
          // gutter={5}
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   flexWrap: "wrap",
          //   alignItems: "center",
          //   alignContent: "center",
          //   justifyContent: "center",
          // }}

          // className="flex "
        >
          {list.map((value, ind) => (
            <Col span={12} key={ind}>
              <div style={{ display: "flex", margin: "30px 40px" }}>
                <Col span={12} className="flex justify-end">
                  <Image src={value.pic} height={183} width={224} alt="pic" />
                </Col>
                <Col span={12} className="text-left">
                  <div style={{ margin: "30px" }}>
                    <p>{value.title}</p>
                    <button className="custom-btn px-[3rem] mt-[2rem] py-[1rem] rounded-[5px] "> Xem thêm</button>
                  </div>
                </Col>
                {/* <Col span={6}></Col> */}
              </div>
            </Col>
          ))}
        </Row>

        {/* <Row className="flex justify-between px-[500px] ">
          {list.map((item, index) => (
            <Col span={12} key={index} className="my-[20px] pl-[20px]">
              <Image src={item.pic} height={183} width={224} alt="pic" />
            </Col>
          ))}
        </Row> */}
      </div>
    </div>
  );
}

export default AnotherCoures;
