<template>
<div>
   <user-assign-form :title="title" :btnText="btnText" :btnColor="btnColor"  @submit="submit" />
</div>
 
  
</template>

<script>
import { mapActions } from 'vuex';
import UserAssignForm from './userAssignForm.vue';
export default {
  props: ["title", "id", "btnText", "btnColor"],
  components: { UserAssignForm },
  computed: {
  },
  methods: {
    ...mapActions('users',['assignUser']),
    submit(v) {
      switch (this.$route.name) {
        case 'AssignUser':
          this.assignUser(v);
          break;
        case 'UpdateUserResults':
          this.assignUser(v);
          break;
        default:
          break;
      }
      // 
    },
  },
};
</script>

<style></style>
