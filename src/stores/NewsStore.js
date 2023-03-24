import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../util/newsApi";

export const useNewsStore = defineStore("news", () => {
  const news = ref([]);
  function getApi() {
    api
      .get("/top-headlines", {
        params: {
          country: "us",
          apiKey: import.meta.env.VITE_NEWS_API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  function getApiSports() {
    api
      .get("/top-headlines", {
        params: {
          country: "us",
          apiKey: import.meta.env.VITE_NEWS_API_KEY,
          category: "sports",
        },
      })
      .then((response) => {
        console.log(response.data.articles);
      });
  }

  function getApiBusiness() {
    api
      .get("/top-headlines", {
        params: {
          country: "us",
          apiKey: import.meta.env.VITE_NEWS_API_KEY,
          category: "business",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }
  return { news, getApi, getApiSports, getApiBusiness };
});
