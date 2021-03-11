import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://localhost:3000/salones");

const service = axios.create({ withCredentials: true, baseURL });

const SALON_SERVICE = {
  show: async () => {
    return await service.get("/all");
  },
  detail: async (id) => {
    return await service.get(`/detail/${id}`);
  },
  salones_user: async (id) => {
    return await service.get(`/user/${id}`);
  },
  create: async (salon) => {
    return await service.post("/crear", salon);
  },
  edit: async (salon, idSalon) => {
    return await service.patch(`/edit/${idSalon}`, salon);
  },
  delete: async (idSalon) => {
    return await service.delete(`/delete/${idSalon}`);
  },
};

export default SALON_SERVICE;
