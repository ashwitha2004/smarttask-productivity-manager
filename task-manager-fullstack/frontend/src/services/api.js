import axios from "axios";

const API = axios.create({
  baseURL: "https://smarttask-productivity-manager-1.onrender.com"
});

export default API;
