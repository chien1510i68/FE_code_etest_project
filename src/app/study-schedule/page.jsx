import React from "react";
import BannerStudySchedule from "@/component/banner/BannerStudySchedule";
import Route from "@/component/route/route";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import FormRegister from "@/component/form/FormRegister";
import New from "@/component/news/New";
import ScheduleList from "./list";
import { getAllNews } from "@/api/apiNews";
import { getAllService } from "@/api/apiService";
import StudyScheduleDetailModal from "@/component/modal/StudySchedule";

async function PageStudySchedule() {
  const res = await getAllNews();
  let newList = [];
  if (res) {
    newList = res?.data?.items.slice(-3);
  }
  const data = await getAllService();

  const items = data?.data?.items.filter(
    (item) => item.typeOfService === "REVIEW_LESSON"
  );

  return (
    <div>
      <BannerStudySchedule />
      <div className=" mt-[20rem] mb-[5rem] max-w-[1440px] mx-[10%] ">
        <ScheduleList items={items} />
        <h2 className="title">Lộ trình học và thi</h2>
        <Route />
      </div>
      <RegisterCourseVstep />
      <div className="max-w-[1440px] mx-[10%] ">
        <h2 className="title">Đăng ký nhận tư vấn </h2>
        <FormRegister />
        <New newList={newList} />
      </div>
      <StudyScheduleDetailModal />
    </div>
  );
}

export default PageStudySchedule;
