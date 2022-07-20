<script setup lang="ts">
import { onMounted } from "vue";
import { useApiDataStore } from "@/stores/apiData";
import { useQuestionIndexStore } from "@/stores/questionIndex";
import { useShowQuizResultsStore } from "@/stores/showQuizResults";
import { useShowQuizQuestionStore } from "@/stores/showQuizQuestion";
import { useAnswersStore } from "@/stores/answers";
import { storeToRefs } from "pinia";
import type { ApiData } from "@/stores/types";

onMounted(() => {
  const parent = document.querySelector(".grid-answers");
  console.log(parent);
  for (let i = parent.children.length; i >= 0; i--) {
    parent.appendChild(parent.children[(Math.random() * i) | 0]);
  }
});

const apiDataStore = useApiDataStore();
const { apiData }: ApiData = storeToRefs(apiDataStore);
const questionIndexStore = useQuestionIndexStore();
const { questionIndex } = storeToRefs(questionIndexStore);
const answersStore = useAnswersStore();
const showQuizResultsStore = useShowQuizResultsStore();
const showQuizQuestionStore = useShowQuizQuestionStore();
</script>

<template>
  <div class="question">
    <h2>Question {{ questionIndex + 1 }}</h2>
    <h2 v-html="apiData.data.results[questionIndex].question"></h2>
    <div
      class="grid-answers"
      v-if="apiData.data.results[questionIndex].type === 'boolean'"
    >
      <div class="answer">
        <input
          type="radio"
          :name="questionIndex.toString()"
          :value="apiData.data.results[questionIndex].correct_answer"
          @change="answersStore.insertAnswer(questionIndex, 'correct')"
          :checked="answersStore.answers[questionIndex] === 'correct'"
        />
        <label
          :for="questionIndex.toString()"
          v-html="apiData.data.results[questionIndex].correct_answer"
        ></label>
      </div>
      <div class="answer">
        <input
          type="radio"
          :name="questionIndex.toString()"
          :value="apiData.data.results[questionIndex].incorrect_answers[0]"
          @change="answersStore.insertAnswer(questionIndex, 'incorrect0')"
          :checked="answersStore.answers[questionIndex] === 'incorrect0'"
        />
        <label
          :for="questionIndex.toString()"
          v-html="apiData.data.results[questionIndex].incorrect_answers[0]"
        ></label>
      </div>
    </div>
    <div v-else class="grid-answers">
      <div class="answer">
        <input
          type="radio"
          :name="questionIndex.toString()"
          :value="apiData.data.results[questionIndex].correct_answer"
          @change="answersStore.insertAnswer(questionIndex, 'correct')"
          :checked="answersStore.answers[questionIndex] === 'correct'"
        />
        <label
          :for="questionIndex.toString()"
          v-html="apiData.data.results[questionIndex].correct_answer"
        ></label>
      </div>
      <div class="answer">
        <input
          type="radio"
          :name="questionIndex.toString()"
          :value="apiData.data.results[questionIndex].incorrect_answers[0]"
          @change="answersStore.insertAnswer(questionIndex, 'incorrect0')"
          :checked="answersStore.answers[questionIndex] === 'incorrect0'"
        />
        <label
          :for="questionIndex.toString()"
          v-html="apiData.data.results[questionIndex].incorrect_answers[0]"
        ></label>
      </div>
      <div class="answer">
        <input
          type="radio"
          :name="questionIndex.toString()"
          :value="apiData.data.results[questionIndex].incorrect_answers[1]"
          @change="answersStore.insertAnswer(questionIndex, 'incorrect1')"
          :checked="answersStore.answers[questionIndex] === 'incorrect1'"
        />
        <label
          :for="questionIndex.toString()"
          v-html="apiData.data.results[questionIndex].incorrect_answers[1]"
        ></label>
      </div>
      <div class="answer">
        <input
          type="radio"
          :name="questionIndex.toString()"
          :value="apiData.data.results[questionIndex].incorrect_answers[2]"
          @change="answersStore.insertAnswer(questionIndex, 'incorrect2')"
          :checked="answersStore.answers[questionIndex] === 'incorrect2'"
        />
        <label
          :for="questionIndex.toString()"
          v-html="apiData.data.results[questionIndex].incorrect_answers[2]"
        ></label>
      </div>
    </div>
    <div class="button-row">
      <button v-if="questionIndex === 0" type="button" class="grayed-out">
        Previous
      </button>
      <button
        v-else
        type="button"
        @click="questionIndexStore.previousQuestion()"
      >
        Previous
      </button>
      <button
        v-if="questionIndex === apiData.data.results.length - 1"
        type="button"
        class="grayed-out"
      >
        Next
      </button>
      <button v-else type="button" @click="questionIndexStore.nextQuestion()">
        Next
      </button>
    </div>
    <button
      type="button"
      v-if="
        answersStore.answers.filter(Boolean).length ===
        apiData.data.results.length
      "
      @click="
        showQuizResultsStore.oppositeBoolean();
        showQuizQuestionStore.oppositeBoolean();
        showQuizQuestionStore.endTheQuiz();
      "
    >
      Complete Quiz
    </button>
    <button v-else type="button" class="grayed-out">Complete Quiz</button>
  </div>
  <progress
    id="progress"
    class="bar"
    :value="
      (answersStore.answers.filter(Boolean).length /
        apiData.data.results.length) *
      100
    "
    max="100"
  ></progress>
  <label for="progress"
    >Quiz progress {{ answersStore.answers.filter(Boolean).length }} /
    {{ apiData.data.results.length }}</label
  >
</template>
