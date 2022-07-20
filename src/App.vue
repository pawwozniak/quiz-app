<script setup lang="ts">
import EntryForm from "./components/EntryForm.vue";
import QuizQuestion from "./components/QuizQuestion.vue";
import { useShowQuizQuestionStore } from "./stores/showQuizQuestion";
import { useShowEntryFormStore } from "./stores/showEntryForm";
import { useQuestionIndexStore } from "@/stores/questionIndex";
import { useShowQuizResultsStore } from "./stores/showQuizResults";
import { storeToRefs } from "pinia";
import QuizResults from "./components/QuizResults.vue";

const showQuizQuestionStore = useShowQuizQuestionStore();
const showEntryFormStore = useShowEntryFormStore();
const showQuizResultsStore = useShowQuizResultsStore();
const questionIndexStore = useQuestionIndexStore();
const { showQuizQuestion } = storeToRefs(showQuizQuestionStore);
const { showEntryForm } = storeToRefs(showEntryFormStore);
const { showQuizResults } = storeToRefs(showQuizResultsStore);
const { questionIndex } = storeToRefs(questionIndexStore);
</script>

<template>
  <EntryForm v-if="showEntryForm"></EntryForm>
  <form v-if="showQuizQuestion">
    <QuizQuestion :key="questionIndex"></QuizQuestion>
  </form>
  <QuizResults v-if="showQuizResults"></QuizResults>
</template>
