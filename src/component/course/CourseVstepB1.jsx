import React from "react";

const CourseVstepB1 = () => {
  return (
    <div className="grid laptop:grid-cols-2 tablet:grid-cols-1 gap-[10rem]">
      <div className="col-span-1">
        <img
          src="/khoa_on_b2vstep.png"
          alt=""
          className=" border-[1px] border-transparent border-solid rounded-[20px]"
        />
      </div>
      <div className="col-span-1">
        <h3 className="text-orange-500 font-[500] mb-[5rem] text-[5.5rem] uppercase	">
          khóa ôn b1
        </h3>
        <p>
          <b> Trình độ đầu vào:</b> Học viên có điểm thi thử từ 400-500 Số buổi:
          10 buổi, 120 phút/1 buổi.
          <br />
          <b>Hình thức học:</b> Học offline, học trực tuyến, học qua video.
          <br />
          <b>Số buổi:</b> 10 buổi, 120 phút/1 buổi.
          <br /> <b>Lộ trình đào tạo: </b> Kỹ năng Nói Viết – 8 buổi;
          <br /> <b> Kỹ năng Nghe</b> – 1 buổi;
          <br /> <b> Kỹ năng Đọc </b>
          – 1 buổi
          <br /> <b>Mục tiêu đạt được:</b> Thi thử đầu ra được 650-800 điểm.
        </p>
      </div>
      <div>
        <b>Mô tả: </b>
        <p>
          Học trực tiếp, trực tuyến linh hoạt. Lịch học linh động, hỗ trợ xếp
          lịch, xếp lớp và đăng ký online cho học viên ở xa.
        </p>
        <p>
          Cung cấp học liệu miễn phí, bám sát cấu trúc đề. Lộ trình học chi
          tiết, theo sát hỗ trợ học viên tới khi thi đạt chứng chỉ.
        </p>
        <p>
          Cung cấp học liệu miễn phí, bám sát cấu trúc đề. Lộ trình học chi
          tiết, theo sát hỗ trợ học viên tới khi thi đạt chứng chỉ.
        </p>
      </div>
    </div>
  );
};

export default CourseVstepB1;
