import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "https://luckyb.herokuapp.com/extras")
  : (baseURL = "http://localhost:3000/extras");

const service = axios.create({ withCredentials: true, baseURL });

const EXTRA_SERVICE = {
  show: async () => {
    return await service.get("/all");
  },
  detail: async (id) => {
    return await service.get(`/detail/${id}`);
  },
  extras_user: async (id) => {
    return await service.get(`/user/${id}`);
  },
  create: async (extra) => {
    return await service.post("/crear", extra);
  },
  edit: async (extra, idExtra) => {
    return await service.patch(`/edit/${idExtra}`, extra);
  },
  delete: async (idExtra) => {
    return await service.delete(`/delete/${idExtra}`);
  },
};

export default EXTRA_SERVICE;
