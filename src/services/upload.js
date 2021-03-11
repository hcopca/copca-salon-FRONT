import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://localhost:3000");

const service = axios.create({ withCredentials: true, baseURL });

const GENERAL_SERVICE = {
  upload: async (photo) => {
    return await service.post("/upload", photo);
  },
};

export default GENERAL_SERVICE;
