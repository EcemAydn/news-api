import axios from "axios";

const API_KEY = "defd596a2dc940cb912e65cf5ab8f4bd";

const newInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default newInstance;
