<script setup lang="ts">
defineProps({
  selectX: String,
  options: Array,
});
</script>

<template>
  <label>{{ selectX }}</label>
  <select class="query">
    <option v-for="({ value, name }, key) in options" :value="value" :key="key">
      {{ name }}
    </option>
  </select>
</template>
