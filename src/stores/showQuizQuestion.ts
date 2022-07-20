import { defineStore } from "pinia";

export const useShowQuizQuestionStore = defineStore({
  id: "showQuizQuestion",
  state: () => ({
    showQuizQuestion: false,
    quizStart: 0,
    quizEnd: 0,
    quizTime: 0,
  }),
  actions: {
    oppositeBoolean() {
      this.showQuizQuestion = !this.showQuizQuestion;
    },
    startTheQuiz() {
      this.quizStart = new Date().getTime();
    },
    endTheQuiz() {
      this.quizEnd = new Date().getTime();
      this.quizTime = this.quizEnd - this.quizStart;
    },
  },
});
