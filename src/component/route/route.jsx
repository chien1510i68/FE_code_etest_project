import React from "react";

function Route(props) {
  const list = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];
  return (
    <div className="flex flex-col items-center block mx-auto w-[100vw] ">
      <h2 className="title">Lộ trình học và thi</h2>
      <div>
        <ul className="grid tablet:grid-cols-1 phone:grid-cols-1 gap-48">
          {list.map((value, ind) => (
            <li key={ind} className="p-[3rem] w-[100vw]">
              <div className="h-[25rem] col-span-1 w-[80%] bg-[#fff4e5] mx-auto flex shadow-lg shadow-[#aaaaaa]">
                <div className="w-[35.5rem] text-[22px] font-bold text-white bg-[#fb9400] flex justify-center items-center ">
                  {value.step}
                </div>
                <div className="bg-[#fff4e5] flex flex-col justify-center w-[213rem]">
                  <div className="p-[8rem]">
                    <h3>{value.title}</h3>
                    <p>{value.content}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Route;
