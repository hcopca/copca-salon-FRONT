import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://localhost:3000/eventos");

const service = axios.create({ withCredentials: true, baseURL });

const EVENTO_SERVICE = {
  show: async () => {
    return await service.get("/all");
  },
  detail: async (id) => {
    return await service.get(`/detail/${id}`);
  },
  eventos_user: async (id) => {
    return await service.get(`/user/${id}`);
  },
  create: async (eventos) => {
    return await service.post("/crear", eventos);
  },
  edit: async (eventos, idEventos) => {
    return await service.patch(`/edit/${idEventos}`, eventos);
  },
  delete: async (idEvento) => {
    return await service.delete(`/delete/${idEvento}`);
  },
};

export default EVENTO_SERVICE;
