import React from "react";
import { Carousel } from "antd";


function Carousels(props) {
  const { items } = props;
  return (
    <div>
      <Carousel autoplay>
        {items.map((item ,index) => (
          <div className="h-[100rem] text-center bg-[#364d79] w-[100vw] h-[70vh]" key={index}>
            <img src={item.id} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
