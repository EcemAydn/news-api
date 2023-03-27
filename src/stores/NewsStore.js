import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../util/newsApi";

export const useNewsStore = defineStore("news", () => {
  const news = ref([]);
  const newsSports = ref([]);
  const newsBusiness = ref([]);

  function getApi() {
    api
      .get("/top-headlines", {
        params: {
          country: "us",
          apiKey: import.meta.env.VITE_NEWS_API_KEY,
        },
      })
      .then((response) => {
        // news.value.push(response.data.articles);
        // console.log(response.data.articles);
        news.value = response.data.articles;
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
        newsSports.value = response.data.articles;
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
        newsBusiness.value = response.data.articles;
      });
  }
  return {
    news,
    newsSports,
    newsBusiness,
    getApi,
    getApiSports,
    getApiBusiness,
  };
});
