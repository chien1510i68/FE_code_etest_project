import { message } from "antd";
import axiosServer from "./axios";

export const getAllService = async (params) => {
  try {
    const res = await axiosServer.get("/service/all");
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
export const getServiceById = async (id) => {
  try {
    const res = await axiosServer.get(`/service/${id}`);
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
