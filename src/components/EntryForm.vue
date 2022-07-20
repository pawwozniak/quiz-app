<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { categoryArray, difficultyArray, typeArray } from "./ArrayData.js";
import SelectOption from "./SelectOption.vue";
import { useShowQuizQuestionStore } from "@/stores/showQuizQuestion";
import { useShowEntryFormStore } from "@/stores/showEntryForm";
import { useApiDataStore } from "@/stores/apiData";
import type { ApiData } from "@/stores/types";

const numberOfQuestions = ref(10);
const apiDataStore: { apiData: ApiData } = useApiDataStore();
const showQuizQuestionStore = useShowQuizQuestionStore();
const showEntryFormStore = useShowEntryFormStore();

const getQuizQuery = async () => {
  const query = document.querySelectorAll(".query");
  const quizQuery =
    "https://opentdb.com/api.php?amount=" +
    numberOfQuestions.value +
    "&category=" +
    query[0].value +
    "&difficulty=" +
    query[1].value +
    "&type=" +
    query[2].value;
  apiDataStore.apiData = await axios.get(quizQuery);
  showEntryFormStore.oppositeBoolean();
  await showQuizQuestionStore.oppositeBoolean();
  showQuizQuestionStore.startTheQuiz();
};
</script>

<template>
  <form>
    <label>Number of Questions: {{ numberOfQuestions }}</label>
    <input
      class="bar"
      type="range"
      min="1"
      max="50"
      v-model="numberOfQuestions"
    />
    <SelectOption selectX="Select Category" :options="categoryArray" />
    <SelectOption selectX="Select Difficulty" :options="difficultyArray" />
    <SelectOption selectX="Select Type" :options="typeArray" />
    <button name="submit" type="button" @click="getQuizQuery()">Submit</button>
  </form>
</template>
