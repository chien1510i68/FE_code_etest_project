import React from "react";
import Intro from "./luyenthib2/intro";
import pic4 from "public/Rectangle 21 (2).png";
import pic1 from "public/aptisb2pic1.png";
import pic2 from "public/aptisb2pic2.png";
import Image from "next/image";
import TableExample from "./luyenthib2/table";
import CautrucdethiB2 from "./luyenthib2/cautrucdethib2";
import Detail from "./luyenthib2/detail";
import Mota from "./luyenthib2/mota";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
function PageAptisB2(props) {
  const listObject = [
    "Học viên có trình độ đầu vào tương đương Aptis B1, cần củng cố kiến thức và thông thạo kĩ năng làm bài thi Aptis để đạt Aptis B2",
    "Học viên có 1 – 2 kỹ năng chưa đạt Aptis B2, cần được hướng dẫn và luyện tập để nâng cao kĩ năng đó lên Aptis B2",
  ];
  const listStep = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    {
      step: "Bước 4",
      title: "Trước ngày thi",
      content:
        "Đội ngũ giảng viên dày dặn kinh nghiệm, có chuyên môn cao, cập nhật dạng đề thi liên tục và bám sát nội dung thi.",
    },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];

  return (
    <section>
      <div style={{ margin: "0 auto", width: "1440px" }}>
        <Intro />
        <div className="mx-[10%]    ">
          <div className="grid grid-cols-3 gap-24 items-center  ">
            <div className="col-span-2  mr-[5%]">
              <h2 className="titleAptisB1">
                Đối tượng cần chứng chỉ tiếng Anh APTIS B2
              </h2>
              <ul className="list-disc mx-[5%]">
                {listObject.map((item, ind) => (
                  <li key={ind}>
                    <p className="pAptis">{item}</p>
                  </li>
                ))}
              </ul>

              <h2 className="titleAptisB1">Thời hạn của chứng chỉ APTIS B2</h2>
              <p className="pAptis mx-[5%]">
                Bằng APTIS có giá trị bao lâu? Sau thi bao lâu thì nhận được kết
                quả? Sau khi thi 5-7 ngày, bạn có thể nhận được kết quả. Mặc dù
                không được cấp bằng, nhưng các bạn được cấp giấy chứng nhận
                điểm. Điểm chứng chỉ APTIS có giá trị vĩnh viễn.
              </p>
              <h2 className="titleAptisB1">Cấu trúc đề thi APTIS B2</h2>
              <TableExample />
            </div>
            <div className="col-span-1 grid grid-rows-3 items-center justify-items-end">
              <Image src={pic1} alt="pic" className="row-span-2" />
              <Image src={pic2} alt="pic" className="row-span-1" />
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-4">
              <CautrucdethiB2 />
            </div>
          </div>
          <h2 className="title">Thông tin khóa học</h2>
          <div className="grid grid-rows-2">
            <div className="row-span-1 grid grid-cols-2 gap-48">
              <div className="col-span-1 flex items-center">
                <div>
                  <Image
                    src={pic4}
                    alt="pic"
                    className="object-cover rounded-[15px] z-100"
                  />
                </div>
              </div>
              <div className="col-span-1 relative ">
                <h2 className="titleAptisB1">KHÓA ÔN B2</h2>
                <Detail />
              </div>
            </div>
            <div className="row-span-1 w-[60%]">
              <Mota />
            </div>
          </div>
        </div>
        <RegisterCourseVstep />
        <div className="mx-[10%]">
          <h2 className="title">Lộ trình học và thi</h2>
          {listStep.map((item, index) => (
            <Route item={item} key={index} />
          ))}
          <AnotherCoures />
          <FormRegister />
        </div>
      </div>
    </section>
  );
}

export default PageAptisB2;
