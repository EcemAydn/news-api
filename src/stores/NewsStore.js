import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "../util/newsApi";

export const useNewsStore = defineStore("news", () => {
  const news = ref([]);
  const newsSports = ref([]);
  const newsBusiness = ref([]);
  const selectedCountry = ref("us");

  const searchNews = computed(() => (search) => {
    return news.value.filter(
      (item) => item.title.includes(search) || item.description.includes(search)
    );
  });

  function getApi(country) {
    return new Promise((resolve, reject) => {
      api
        .get("/top-headlines", {
          params: {
            country: country,
            category: "general",
            apiKey: import.meta.env.VITE_NEWS_API_KEY,
          },
        })
        .then((response) => {
          news.value = response.data.articles;
          resolve("Success");
        })
        .catch((error) => {
          reject(error.response.data.message);
        });
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
    searchNews,
    newsBusiness,
    getApi,
    getApiSports,
    getApiBusiness,
    selectedCountry,
  };
});
