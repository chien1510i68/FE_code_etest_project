import React from "react";
const listStructExampleB1 = [
  {
    img: "/listening.png",
    title: "VSTEP B1 LISTENING: ",
    time: "  40 phút – 35 câu hỏi",
    description:
      "Gồm 3 bài thi dạng trắc nghiệm. Các bài nghe có dạng hội thoại, bài thông báo, trao đổi, hướng dẫn…",
  },
  {
    img: "/reading.png",
    title: "VSTEP B1 READING (ĐỌC): ",
    time: "60 phút – 40 câu hỏi",
    description:
      "4 bài đọc với tổng độ dài khoảng 2000 từ. Mỗi bài đọc có 10 câu hỏi trắc nghiệm đi kèm.",
  },
  {
    img: "/writing.png",
    time: "60 phút – 2 bài viết",

    title: "VSTEP B1 WRITING (VIẾT):  ",
    description:
      "Phần 1: Viết thư/email với độ dài khoảng 120 từ. Phần 2: Viết luận dài khoảng 250 từ theo một chủ đề cho trước đưa ra quan điểm của mình. ",
  },
  {
    img: "/speaking.png",
    time: "12 phút – 3 phần",

    title: "VSTEP B1 SPEAKING (NÓI): ",
    description:
      "Phần 3 – Phát triển chủ đề: Nói quan điểm về một chủ đề cho trước và trả lời một vài câu hỏi mở rộng liên quan đến chủ đề.",
  },
];
function StructExamB1(props) {
  return (
    <div>
      <h2 className="title text-center">Cấu trúc đề thi B1 VSTEP</h2>
      <div className="grid laptop:grid-cols-4 desktop:gap-72 tablet:gap-24 tablet:grid-cols-2 phone:grid-cols-1 ">
        {listStructExampleB1.map((item, index) => (
          <div key={index} className="col-span-1 mb-[10rem]">
            <img
              src={item.img}
              alt=""
              className="w-full h-[300px] object-cover rounded-[20px]"
            />
            <div className="px-[2rem] my-[1rem]">
              <h2 className="text-[4.5rem] font-[500] ">{item.title}</h2>
              <span className="font-[500] mb-[5rem] block">{item.time}</span>
              <p className="text-[4rem] line-clamp-3 ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StructExamB1;
