import { Button } from "antd/es/radio";
import React from "react";
import Carousels from "@/component/slider/Carousel";
import New from "@/component/news/New";
import FormRegister from "@/component/form/FormRegister";
import { getAllNews } from "@/api/apiNews";

const items = [
  {
    id: "english.png",
  },
  {
    id: "Frame 1.png",
  },
];

async function PageDashbroad() {
  const res = await getAllNews();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res news::", res);
  let newList = [];
  if (res) {
    newList = res?.data?.items;
    // console.log("Thanh cong ");
  }

  return (
    <div className=" ">
      <Carousels items={items} />
      <div className=" mx-auto max-w-[1440px]">
        <div className=" bg-[#fff]">
          <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%] mt-[100px]">
            <h2 className="text-[10rem] font-[500] text-center my-[10rem] break-before-column text-[#f79500]">
              Tin tức
            </h2>
            <New newList={newList} />

            <h2 className="text-[10rem] font-[500] text-center my-[10rem] break-before-column text-[#f79500]">
              Đăng ký nhận tư vấn
            </h2>
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDashbroad;
