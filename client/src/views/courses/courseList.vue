<template>
  <div>
    <default-table
      :lists="courses.data"
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
          title: "Title",
          key: "title",
          class: "text-left text-large",
        },
        // {
        //   title: "Actions",
        //   width: "25%",
        //   class: "text-center text-large",
        // },
      ],
    };
  },
  computed: {
    ...mapGetters("courses", ["courses", "loading"]),
  },
  components: {
    DefaultTable,
  },
  created() {
    this.getCourses();
  },
  methods: {
    ...mapActions('courses',['getCourses']),
  },
};
</script>

<style></style>
