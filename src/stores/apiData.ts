import { defineStore } from "pinia";

export const useApiDataStore = defineStore({
  id: "apiData",
  state: () => ({
    apiData: [],
  }),
});
