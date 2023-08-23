import axiosServer from "./axios";

export const getAllNews = (params) => {
  return axiosServer.get("/news/all", { params: params });
};

export const getAllExam = (params) => {
  return axiosServer.get("/exam/schedule/all", { params: params });
};
