import { defineStore } from "pinia";

export const useShowQuizResultsStore = defineStore({
  id: "showQuizResults",
  state: () => ({
    showQuizResults: false,
  }),
  actions: {
    oppositeBoolean() {
      this.showQuizResults = !this.showQuizResults;
    },
  },
});
