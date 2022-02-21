<template>
  <div class="center card">
    <h2>{{ title }}</h2>
    <results-table 
    :lists="user"
    :headers="headers"
    :loading="loading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ResultsTable from '../../components/tables/results-table.vue';
export default {
  components: { ResultsTable },
  props: ["title", "id"],
  data() {
    return {
        headers:[
        {
          title: "Name",
          key: "name",
          class: 'text-left text-large'
        },
        {
          title: "Course",
          key: "course",
          class: 'text-left text-large'
        },
        {
          title: "Status",
          key: "status",
          class: 'text-left text-large'
        },
        ]
    };
  },
  computed:{
      ...mapGetters('users',['user'])
  },
  created(){
      this.getUser(this.id)
  },
  methods: {
      ...mapActions('users',['getUser'])
  },
};
</script>

<style></style>
