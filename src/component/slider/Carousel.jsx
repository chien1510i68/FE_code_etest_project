import React from "react";
import { Carousel } from "antd";

function Carousels(props) {
  const { banner } = props;
  // console.log("object", banner);
  return (
    <div>
      <Carousel autoplay>
        {banner?.map((item, index) => (
          <div
            className=" text-center bg-[#364d79] w-[100vw] h-[50vh]"
            key={index}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
