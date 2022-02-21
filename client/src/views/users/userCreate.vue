<template>
  <div>
    <user-form :title="title" @submit="submit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import userForm from "./userForm.vue";
export default {
  props: ["title"],
  components: { userForm },
  methods: {
    ...mapActions('users',['createUser']),
    submit(v) {
      this.createUser(v)
    },
  },
};
</script>

<style></style>
