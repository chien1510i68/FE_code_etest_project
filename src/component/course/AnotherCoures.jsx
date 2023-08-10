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
    <div className="flex flex-col items-center block mx-96">
      <h2 className="title">Các chương trình học khác</h2>
      <div>
        <div className="grid tablet:grid-cols-2 phone:grid-cols-1 gap-48"        >
          {list.map((value, ind) => (
            <div className="col-span-1" key={ind}>
              <div className="grid-cols-2 grid gap-24 items-center">
                <div  className="col-span-1">
                  <Image src={value.pic} height={183} width={224} alt="pic" />
                </div>
                <div span={12} className="col-span-1">
                  <div >
                    <p>{value.title}</p>
                    <button className="custom-btn px-[3rem] mt-[2rem] py-[1rem] rounded-[5px] ">
                      {" "}
                      Xem thêm
                    </button>
                  </div>
                </div>
                {/* <Col span={6}></Col> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnotherCoures;
