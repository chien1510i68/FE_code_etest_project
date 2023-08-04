'use server '

import { Button, Col, Row, notification } from "antd";
import React from "react";
// import { useNavigate } from "react-router";

function New(props) {
  const { newList } = props;
//   const naviate = useNavigate;
//   const handleNavigate = (title)=>{
//         notification.success({message : "clicked to" + title})
//   }
  return (
    <>
      <Row gutter={30} className="px-[100px] mt-[10rem]  " >
        {
            newList.map((item)=>(
                <Col span={8} className="w-full hover:cursor-pointer mt-[15rem]"
                //  onClick={() =>{handleNavigate(item.title)}}
                 >
                <img
                  src={item.img}  alt=""
                  className="h-[100rem] w-full object-cover rounded-t-[3rem] "
                />
                <h2 className="text-[5rem] font-[600] text-[#FB9400] leading-[5rem]  py-[5rem] line-clamp-2 h-[15.7rem]">
                 {item.title}
                </h2>
                <p className="text-[#333] pt-[5rem] pb-[2rem]">
                 {item.description}
                </p>
                <Button className="block ml-auto bg-[#FB9400] hover:bg-[#ffc00d] !important" type="primary"> Xem thêm</Button>
              </Col>
            ))
        }
      
      </Row>
    </>
  );
}

export default New;



