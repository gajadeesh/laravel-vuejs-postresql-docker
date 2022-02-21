<template>
  <div>
    <default-table
      :lists="users.data"
      :title="title"
       :pathName="pathName"
      :headers="headers"
      :loading="loading"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DefaultTable from "../../components/tables/default-table.vue";
export default {
  props: ["title", "pathName"],
  data() {
    return {
      headers: [
        {
          title: "Name",
          key: "name",
          class: 'text-left text-large'
        },
        {
          title: "Actions",
          width: '25%',
          class:"text-center text-large",
          buttons:[
            {
              name: 'Assign',
              key: 'assign',
              color: 'info'
            },
            {
              name: 'Result',
              key: 'result',
              color: 'success'
            },
            {
              name: 'Edit',
              key: 'edit',
              color: 'warning'
            },
            {
              name: 'Delete',
              key: 'delete',
              color: 'danger'
            }
          ]
        },
      ],
    };
  },
  computed: {
    ...mapGetters("users", ["users", "loading"]),
  },
  components: {
    DefaultTable,
  },
  created() {
     this.getUsers();
   
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    
  },
};
</script>

<style></style>
