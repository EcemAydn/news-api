import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../util/newsApi";

export const useNewsStore = defineStore("news", () => {
  const news = ref([]);
  const newsSports = ref([]);
  const newsBusiness = ref([]);
  const selectedCountry = ref("us");

  // const searchNews = computed(() => (search) => {
  //   return news.value.filter(
  //     (item) => item.title.includes(search) || item.description.includes(search)
  //   );
  // });

  function getApi() {
    return new Promise((resolve, reject) => {
      api
        .get("/top-headlines", {
          params: {
            country: selectedCountry.value,
            category: "general",
            apiKey: import.meta.env.VITE_NEWS_API_KEY,
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

  function setSelectedCountry(country) {
    selectedCountry.value = country;
    getApi();
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

  function getNewsById(id) {
    return news.value.find((item) => item.myId == id);
  }

  return {
    news,
    newsSports,
    newsBusiness,
    getApi,
    getApiSports,
    getApiBusiness,
    getNewsById,
    setSelectedCountry,
    selectedCountry,
  };
});
