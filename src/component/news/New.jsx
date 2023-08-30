import { Button, Col, Image, Row, notification } from "antd";
import Link from "next/link";
import React from "react";
// import { useNavigate } from "react-router";

function New(props) {
  const { newList } = props;
  //   const naviate = useNavigate;
  //   const handleNavigate = (title)=>{
  //         notification.success({message : "clicked to" + title})
  //   }
  return (
    <div>
      <div className="tablet:grid-cols-3 grid phone:grid-cols-1 gap-24   ">
        {newList.map((item, ind) => (
          <div key={ind}>
            <Image
              src="kh_12.jpg"
              alt="this is the image "
              className="h-[100rem] w-full object-cover rounded-t-[3rem] "
            />
            <Link
              key={item.id}
              href={`new/${item.id}`}
              className=" col-span-1  hover:cursor-pointer mt-[10%] mx-auto"
              //  onClick={() =>{handleNavigate(item.title)}}
            >
              <p className="text-[5rem]   font-[600] text-[#FB9400] leading-[5rem]  py-[5rem] line-clamp-2 h-[15.7rem]">
                {item.title}
              </p>
              <p className="text-[#333] pt-[5rem] line-clamp-4 pb-[2rem]">
                {item.description}
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
