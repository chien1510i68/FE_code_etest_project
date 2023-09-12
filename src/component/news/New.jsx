import { Button, Col, Image, Row, notification } from "antd";
import Link from "next/link";
import React from "react";
// import { useNavigate } from "react-router";

function New(props) {
  const { newList } = props;

  return (
    <div>
      <div className="tablet:grid-cols-3 grid phone:grid-cols-1 gap-24   ">
        {newList.map((item, ind) => (
          <div key={ind}>
            <img
              src={item.image}
              alt="this is the image "
              className=" w-full object-cover rounded-t-[3rem] "
            />
            <Link
              key={item.id}
              href={`new/${item.id}`}
              className=" col-span-1  hover:cursor-pointer mt-[10%] mx-auto"
              //  onClick={() =>{handleNavigate(item.title)}}
            >
              <p className="text-[5rem] font-[600] text-[#FB9400]  my-[3%] line-clamp-2 ">
                {item.name}
              </p>
              <p className="text-[#333]  line-clamp-3 mb-[3rem]">
                {item.content}
              </p>
              <Button
                className="block ml-auto bg-[#FB9400] hover:bg-[#ffc00d] !important"
                type="primary"
              >
                {" "}
                Xem thêm
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default New;
