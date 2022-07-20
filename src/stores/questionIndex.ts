import { defineStore } from "pinia";

export const useQuestionIndexStore = defineStore({
  id: "questionIndex",
  state: () => ({
    questionIndex: 0,
  }),
  actions: {
    nextQuestion() {
      this.questionIndex = this.questionIndex + 1;
    },
    previousQuestion() {
      this.questionIndex = this.questionIndex - 1;
    },
    reset() {
      this.questionIndex = 0;
    },
  },
});
