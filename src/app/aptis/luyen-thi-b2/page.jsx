import React from "react";
import Intro from "../../../component/banner/BannerAptisB2";
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
import DownloadDocument from "@/component/modal/downloadDocument";
import { getDataDisplay } from "@/api/apiDisplay";
async function PageAptisB2(props) {
  const listObject = [
    "Học viên có trình độ đầu vào tương đương Aptis B1, cần củng cố kiến thức và thông thạo kĩ năng làm bài thi Aptis để đạt Aptis B2",
    "Học viên có 1 – 2 kỹ năng chưa đạt Aptis B2, cần được hướng dẫn và luyện tập để nâng cao kĩ năng đó lên Aptis B2",
  ];

  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let adList = [];
  let routeList = [];
  let banner = {};
  if (res) {
    routeList = res?.data?.items.slice(4, 9);
    banner = res?.data?.items[38];
    console.log("route", routeList);
    adList = res?.data?.items.slice(15, 18);
  }
  return (
    <section>
      <Intro banner={banner} />
      <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
        <div className="mx-[10%]    ">
          <div className="grid laptop:grid-cols-3 phone:grid-cols-1 gap-24 items-center  ">
            <div className="col-span-2  mr-[5%] ">
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
            <div className=" laptop:col-span-1 grid laptop:grid-rows-3 laptop:grid-cols-1 tablet:grid-cols-2 items-center  phone:justify-items-center laptop:justify-items-end">
              <Image
                src={pic1}
                alt="pic"
                className="laptop:row-span-2 tablet:col-span-1 tablet:grid phone:hidden"
              />
              <Image
                src={pic2}
                alt="pic"
                className="laptop:row-span-1 tablet:col-span-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className="laptop:col-span-4 phone:col-span-5">
              <CautrucdethiB2 />
            </div>
          </div>
          <h2 className="title">Thông tin khóa học</h2>
          <div className="grid laptop:grid-rows-2 ">
            <div className="row-span-1 grid laptop:grid-cols-2 phone:grid-cols-1 gap-48">
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
            <div className="row-span-1 laptop:w-[80%] phone:w-[100%]">
              <Mota />
            </div>
          </div>
        </div>
        <DownloadDocument />
        <RegisterCourseVstep />
        <div className="mx-[10%]">
          <h2 className="title">Lộ trình học và thi</h2>
          {routeList.map((item, index) => (
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
