import React from "react";
import BannerToeic from "../../component/banner/BannerToeic";
import Advantage from "@/component/introduce/advantage";
import { Button, Col, Row } from "antd";
import { getDataDisplay } from "@/api/apiDisplay";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import Image from "next/image";

async function PageToeic(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let adList = [];
  let banner = [];
  if (res) {
    adList = res?.data?.items.slice(39, 46);
    banner = res?.data?.items.slice(25, 26);
  }
  return (
    <div className="mx-[auto]">
      <BannerToeic banner={banner} />
      <div className="mx-[10%] max-w-[1440px]">
        <div>
          <h2 className="title">Ưu điểm của chúng tôi </h2>
          <div className="justify-between grid gap-12 phone:grid-cols-1 tablet:grid-cols-2">
            {adList.map((item, index) => (
              <Advantage item={item} key={index} />
            ))}
          </div>
        </div>

        <>
          <h2 className="title">Thông tin khóa học </h2>
          {/* <Course item={} */}
          <div className="">
            <Col
              span={14}
              className="border-[1px] border-primaryColor border-solid rounded-[5px] mx-auto"
            >
              <h2 className="uppercase text-[5rem] font-[700] py-[2rem] bg-primaryColor text-[#fff] text-center ">
                khóa ôn toeic
              </h2>
              <p className="px-96 py-[5rem] h-[100rem] line-clamp-[10] ">
                {" "}
                Vận dụng thành thạo các chiến lược thi VSTEP Có kĩ năng viết
                tiếng Anh học thuật nhằm làm tốt các dạng bài viết trong kì thi.
                Có kĩ năng đọc hiểu tiếng Anh nhanh và hiệu quả. Có kĩ năng nghe
                một cách hiệu quả với các chiến lược làm bài thi nghe. Mở rộng
                vốn từ và phát triển kĩ năng tìm ý khi viết hay nói. Thành thạo
                nhiều chủ đề nói thực tế, đa dạng, nâng cao sự tự tin trong giao
                tiếp. Trải nghiệm với các bài thi thử theo định dạng VSTEP.,
              </p>
              <Button className="mx-auto block mb-[5rem] bg-primaryColor custom-btn uppercase hover:text-[#fff]">
                Đăng ký học{" "}
              </Button>
            </Col>
            {/* <Col span={2}></Col> */}
          </div>
        </>

        <div className="">
          <Image
            src="/toeic_3.jpg"
            className="w-full "
            alt="toeic3"
            width={950}
            height={347}
          />
        </div>
        <div>
          <h2 className="title ">Lộ trình học</h2>
          <div className="grid grid-cols-3">
            <Image
              src="/toeic_5.webp"
              className=" h-full w-full object-cover col-span-3"
              alt="pic"
              height={520}
              width={1043}
            />
          </div>
        </div>

        <div>
          <AnotherCoures />
        </div>
        <div>
          <h2 className="title">Đăng ký tư vấn</h2>
          <FormRegister />
        </div>
      </div>
    </div>
  );
}

export default PageToeic;
