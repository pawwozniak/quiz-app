import { defineStore } from "pinia";

export const useShowEntryFormStore = defineStore({
  id: "showEntryForm",
  state: () => ({
    showEntryForm: true,
  }),
  actions: {
    oppositeBoolean() {
      this.showEntryForm = !this.showEntryForm;
    },
  },
});
