import { message } from "antd";
import axiosServer from "./axios";

export const getAllExamSchedule = async (params) => {
  try {
    const res = await axiosServer.get("/exam/schedule/all");
    console.log("res:: ", res);
    const { data, success, error } = res?.data;
    if (success) {
      return {
        data: data || [],
      };
    } else {
      message.error(error || "Lỗi không lấy được dữ liệu");
    }
  } catch (error) {}
};
