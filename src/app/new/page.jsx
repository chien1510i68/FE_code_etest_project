import { Button } from "antd/es/radio";
import React from "react";
import Carousels from "@/component/slider/Carousel";
import New from "@/component/news/New";
import FormRegister from "@/component/form/FormRegister";
import axios from "axios";
const items = [
  {
    id: "english.png",
  },
  {
    id: "Frame 1.png",
  },
];
// const newList = [
//   {
//     img: "https://images.unsplash.com/photo-1599906823892-321f8347dfcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2UlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     title: "Luyện thi TOEIC cấp tốc công phá 550+ TOEIC trong 14 ngày",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1611529375210-577127775587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2UlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     title:
//       "Những công việc phổ biến và có tiềm năng trong ngành Công nghệ thông tin",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1520564816385-4f9d711941aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     title:
//       "10 dạng bài thường gặp trong phần thi Reading và cách nâng cấp câu trả lời",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1599906823892-321f8347dfcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2UlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     title: "Luyện thi TOEIC cấp tốc công phá 550+ TOEIC trong 14 ngày",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1520564816385-4f9d711941aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     title:
//       "10 dạng bài thường gặp trong phần thi Reading và cách nâng cấp câu trả lời",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1611529375210-577127775587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2UlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     title:
//       "Những công việc phổ biến và có tiềm năng trong ngành Công nghệ thông tin",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//   },
// ];

async function handleGetNews() {
  try {
    const res = await axios.get(
      "https://4b79-118-70-132-104.ngrok-free.app/news/all"
    );
    return res;
  } catch (error) {}
}

async function PageDashbroad() {
  const res = await handleGetNews();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  let newList = null;
  if (res &&  res.data?.success) {
    newList = res.data.data.items.map((item) => {
      return {
        id: item.id,
        img: item.image,
        title: item.name,
        description: item.content,
      };
    });
  // console.log("Thanh cong ");
  }

  return (
    <div className="mt-[45px] bg-[#fff]">
      <Carousels items={items} />

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
  );
}

export default PageDashbroad;
