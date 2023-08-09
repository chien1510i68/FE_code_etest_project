import { list } from "postcss";
import React from "react";
import star from "public/Rating.svg";
import Image from "next/image";
function Advertisement(props) {
  
  const list = [
    { title: "Uy Tín", icon: "like", content: "uy tín" },
    { title: "Cam kết", icon: "like", content: "cam kết" },
    { title: "Thuận tiện", icon: "like", content: "thuận  tiện" },
  ];
  return (
    <div>
      <h2 className="title">Tại sao nên chọn chúng tôi</h2>
      <div>
        <ul className="flex justify-around ">
          {list.map((value, index) => (
            <li key={index}>
              <div className="h-[81rem] w-[77rem] bg-[#FFF4E5] ">
                <div className="p-[6rem] mt-[10rem] ">
                  <Image src={star} height={17} width={130} alt="rating" />

                  <div className="text-[6rem] font-bold my-[5rem]">
                    {value.title} {value.icon}
                  </div>
                  <p>{value.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Advertisement;
