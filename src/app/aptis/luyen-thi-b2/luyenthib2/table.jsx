import React from "react";

const data = [
  { id: "Nghe", des: "25 câu hỏi", time: "55 phút" },
  { id: "Nói", des: "4 phần thi", time: "12 phút" },
  { id: "Đọc", des: "4 phần thi", time: "30 phút" },
  { id: "Viết", des: "4 phần thi", time: "55 phút" },
  { id: "Từ vựng & Ngữ pháp", des: "50 câu hỏi", time: "20 phút" },
];

const TableExample = () => {
  return (
    <div className="flex justify-center items-center ">
      <table className="min-w-full divide-y border-[#808080/50] border">
        <thead className="">
          <tr className="grid grid-cols-3">
            <th className="px-4 py-3 text-center text-lx font-medium  tracking-wider border-[1px] ">
              Phần thi
            </th>
            <th className="px-4 py-3 text-center text-lx font-medium  tracking-wider border-[1px]">
              Số câu hỏi
            </th>
            <th className="px-4 py-3 text-center text-lx font-medium  tracking-wider border-[1px]">
              Thời gian làm bài
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="grid grid-cols-3">
              <td className="px-4 py-4 text-center border ">{item.id}</td>
              <td className="px-4 py-4 text-center border">{item.des}</td>
              <td className="px-4 py-4 text-center border">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableExample;
