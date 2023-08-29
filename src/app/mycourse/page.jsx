import Carousels from "@/component/slider/Carousel";
import React from "react";
import TableCourse from "./TableCourse";
const items = [
  {
    id: "/1.jpg",
  },
  {
    id: "/2.jpg",
  },
  {
    id: "/5.jpg",
  },
  {
    id: "/6.jpg",
  },
  {
    id: "/7.jpg",
  },
  {
    id: "/8.jpg",
  },
];

function PageMyCourse() {
  return (
    <div className="">
      <Carousels items={items} />

      <div className="mx-auto max-w-[1440w]">
        <div className="mx-[10%] ">
          <h2 className="my-[5%]">Khóa học của tôi </h2>
          <TableCourse />
        </div>
      </div>
    </div>
  );
}

export default PageMyCourse;
