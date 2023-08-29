import { message } from "antd";
import axiosServer from "./axios";

export const getAllNews = async (params) => {
  try {
    const res = await axiosServer.get("/news/all");
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
