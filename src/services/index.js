import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "https://luckyb.herokuapp.com/auth")
  : (baseURL = "http://localhost:3000/auth");

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  signup: async (user) => {
    return await service.post("/signup", user);
  },
  login: async (user) => {
    return await service.post("/login", user);
  },
  currentUser: async () => {
    return await service.get("/logged");
  },

  logOut: async () => {
    return await service.get("/logout");
  },
};

export default MY_SERVICE;
