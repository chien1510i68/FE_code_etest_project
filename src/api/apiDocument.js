import axiosServer from "./request";

export const getAllDocument = (params) => {
  return axiosServer.get("/document/all", { params: params });
};
