import { defineStore } from "pinia";

export const useAnswersStore = defineStore({
  id: "answers",
  state: () => ({
    answers: Array(50).fill(""),
  }),
  actions: {
    insertAnswer(index: number, item: string) {
      this.answers.splice(index, 1, item);
    },
    reset() {
      this.answers = Array(50).fill("");
    },
  },
});
