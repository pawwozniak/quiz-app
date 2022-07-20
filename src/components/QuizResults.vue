<script setup lang="ts">
import { useApiDataStore } from "@/stores/apiData";
import { useAnswersStore } from "@/stores/answers";
import { useQuestionIndexStore } from "@/stores/questionIndex";
import { useShowEntryFormStore } from "@/stores/showEntryForm";
import { useShowQuizResultsStore } from "@/stores/showQuizResults";
import { useShowQuizQuestionStore } from "@/stores/showQuizQuestion";
import { storeToRefs } from "pinia";
import type { ApiData } from "@/stores/types";

const apiDataStore = useApiDataStore();
const { apiData }: { apiData: ApiData } = storeToRefs(apiDataStore);
const showQuizResultsStore = useShowQuizResultsStore();
const showEntryFormStore = useShowEntryFormStore();
const questionIndexStore = useQuestionIndexStore();
const showQuizQuestionStore = useShowQuizQuestionStore();
const answersStore = useAnswersStore();
const correctAnswers = answersStore.answers.filter(
  (x) => x === "correct"
).length;
const seconds = showQuizQuestionStore.quizTime / 1000;
</script>

<template>
  <div>
    <table>
      <tr>
        <td>Correct Answers</td>
        <td>{{ correctAnswers }}/{{ apiData.data.results.length }}</td>
      </tr>
      <tr>
        <td>Percentage Score</td>
        <td>{{ (correctAnswers / apiData.data.results.length) * 100 }} %</td>
      </tr>
      <tr>
        <td>Quiz Time</td>
        <td>{{ Math.floor(seconds / 60) }} min. {{ seconds % 60 }} sec.</td>
      </tr>
    </table>
    <button
      @click="
        showQuizResultsStore.oppositeBoolean();
        showEntryFormStore.oppositeBoolean();
        answersStore.reset();
        questionIndexStore.reset();
      "
    >
      Try again
    </button>
  </div>
</template>
