import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../util/newsApi";

export const useNewsStore = defineStore("news", () => {
  const news = ref([]);
  const newsSports = ref([]);
  const newsBusiness = ref([]);
  const selectedCountry = ref("us");

  function getApi(search) {
    return new Promise((resolve, reject) => {
      api
        .get("/top-headlines", {
          params: {
            country: selectedCountry.value,
            category: "general",
            apiKey: import.meta.env.VITE_NEWS_API_KEY,
            q: search,
          },
        })
        .then((response) => {
          response.data.articles.forEach((item, index) => {
            item.myId = index + 1;
          });
          news.value = response.data.articles;
          resolve("Success");
        })
        .catch((response) => {
          console.log(response);
          reject(response);
        });
    });
  }

  function getApiSports(search) {
    return new Promise((resolve, reject) => {
      api
        .get("/top-headlines", {
          params: {
            country: selectedCountry.value,
            category: "sports",
            apiKey: import.meta.env.VITE_NEWS_API_KEY,
            q: search,
          },
        })
        .then((response) => {
          response.data.articles.forEach((item, index) => {
            item.myId = index + 1;
          });
          newsSports.value = response.data.articles;
          resolve("Success");
        })
        .catch((response) => {
          console.log(response);
          reject(response);
        });
    });
  }

  function getApiBusiness(search) {
    return new Promise((resolve, reject) => {
      api
        .get("/top-headlines", {
          params: {
            country: selectedCountry.value,
            category: "business",
            apiKey: import.meta.env.VITE_NEWS_API_KEY,
            q: search,
          },
        })
        .then((response) => {
          response.data.articles.forEach((item, index) => {
            item.myId = index + 1;
          });
          newsBusiness.value = response.data.articles;
          resolve("Success");
        })
        .catch((response) => {
          console.log(response);
          reject(response);
        });
    });
  }

  function setSelectedCountry(country) {
    selectedCountry.value = country;
    getApi();
    getApiSports();
    getApiBusiness();
  }

  function getNewsById(id) {
    return news.value.find((item) => item.myId == id);
  }

  function getNewsSportsById(id) {
    return newsSports.value.find((item) => item.myId == id);
  }

  function getNewsBusinessById(id) {
    return newsBusiness.value.find((item) => item.myId == id);
  }

  return {
    news,
    newsSports,
    newsBusiness,
    getApi,
    getApiSports,
    getApiBusiness,
    getNewsById,
    getNewsSportsById,
    getNewsBusinessById,
    setSelectedCountry,
    selectedCountry,
  };
});
