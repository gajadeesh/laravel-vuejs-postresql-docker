<template>
  <course-form :title="title" :data="user" @submit="submit" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import courseForm from "./courseForm.vue";
export default {
  props: ["title", "id"],
  components: { courseForm },
  computed: {
    ...mapGetters("users", ["user"]),
  },
  created() {
    this.getUser(this.id);
  },
  methods: {
    ...mapActions("users", ["getUser", "updateUser"]),
    submit(v) {
      const data = {
        id: this.id,
        payload: v,
      };
      this.updateUser(data);
    },
  },
};
</script>

<style></style>
