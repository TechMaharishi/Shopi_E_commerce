import axios from "axios";

const Axios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default Axios;
