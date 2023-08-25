import { message } from "antd";
import axiosServer from "./axios";

export const getAllDocument = async (params) => {
  try {
    const res = await axiosServer.get("/document/all");
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

export const downloadDocument = async (params) => {
  try {
    const res = await axiosServer.get(`/file/?filename=${params}`);
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
