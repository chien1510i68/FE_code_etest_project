import BannerAptisB1 from "@/component/banner/BannerAptisB1";
import Customers from "./luyen-thi-b1/customers";
import pic3 from "public/aptisb1pic4.svg";
import pic4 from "public/Mask Group.png";
import pic5 from "public/confident-teacher-explaining-lesson-pupils 1.png";
import Image from "next/image";
import Thoihan from "./luyen-thi-b1/thoihan";
import Cautrucdethi from "./luyen-thi-b1/cautrucdethii";
import Detail from "./luyen-thi-b1/detail";
import Mota from "./luyen-thi-b1/mota";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import DownloadDocument from "@/component/modal/downloadDocument";
import { getDataDisplay } from "@/api/apiDisplay";
async function PageAptisB1(props) {
  const res = await getDataDisplay();
  // console.log("Du lieu duoc tra ve la : ", res.data.data.items);
  // console.log("res ::", res?.data?.items);
  let listCustomers = [];
  let routeList = [];
  let banner = {};
  if (res) {
    routeList = res?.data?.items.slice(4, 9);
    banner = res?.data?.items[34];
    // console.log("route", routeList);
    listCustomers = res?.data?.items.slice(35, 38);
  }
  return (
    <section>
      <BannerAptisB1 banner={banner} />
      <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
        <div className="mx-[10%] my-[5%]">
          <div className="my-[5%]">
            <h2 className="titleAptisB1">
              Đối tượng cần chứng chỉ tiếng Anh APTIS B1
            </h2>
            <div className="grid tablet:gap-48 phone:gap-12 laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 mt-[3%] ">
              {listCustomers.map((item, index) => (
                <Customers item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="grid tablet:grid-cols-3 gap-24 my-[5%] phone:grid-cols-1">
            <div className="tablet:hidden">
              <Image src={pic3} alt="pic" className="row-span-1 " />
            </div>
            <div className="col-span-2 ">
              <Thoihan />
              <Cautrucdethi />
            </div>
            <div className="col-span-1 grid laptop:grid-rows-2 phone:grid-rows-1 gap-[20%] justify-end phone:gap-0">
              <Image
                src={pic3}
                alt="pic"
                className="row-span-1 tablet:grid phone:hidden"
              />
              <Image src={pic4} alt="pic" className="row-span-1" />
            </div>
          </div>
          <h2 className="title">Thông tin khóa học</h2>
          <div className="grid tablet:grid-rows-2  phone:grid-rows-3">
            <div className="tablet:row-span-1 grid tablet:grid-cols-2  phone:grid-cols-1 phone:row-span-2">
              <div className="col-span-1">
                <h2 className="titleAptisB1">KHÓA ÔN B1</h2>
                <Detail />
              </div>
              <div className="col-span-1  ">
                <div className="relative image-bottom-aptis-b1 image-top-aptis-b1 phone:my-[5%]">
                  <Image
                    src={pic5}
                    alt="pic"
                    className="object-cover rounded-[15px] z-100"
                  />
                </div>
              </div>
            </div>
            <div className="row-span-1 laptop::w-[60%] phone:w-[100%]">
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

export default PageAptisB1;
