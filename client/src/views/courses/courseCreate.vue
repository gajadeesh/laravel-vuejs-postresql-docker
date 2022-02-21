<template>
  <div>
    <course-form :title="title" @submit="submit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import courseForm from "./courseForm.vue";
export default {
  props: ["title"],
  components: { courseForm },
  methods: {
    ...mapActions('courses',['createCourse']),
    submit(v) {
      this.createCourse(v)
    },
  },
};
</script>

<style></style>
