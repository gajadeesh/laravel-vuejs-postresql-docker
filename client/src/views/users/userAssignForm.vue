<template>
  <div class="center card">
    <h2>{{ title }}</h2>
    <form id="app" @submit.prevent="checkForm" method="post">
      <table width="100%">
        <tbody>
          <select-input
            forName="course"
            @value="form.course_id = $event"
            :value="form.course_id"
            label="Course"
            itemKey="id"
            itemValue="title"
            :options="allcourses"
          />
          <select-input
            forName="result"
            @value="form.status = $event"
            :value="form.status"
            label="Result"
            :options="results"
          />
        </tbody>
      </table>

      <p>
        <input type="submit" :value="btnText" :class="btnColor" />
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SelectInput from "../../components/elements/selectInput.vue";
import TextInput from "../../components/elements/textInput.vue";
export default {
  props: ["title", "data","btnText","btnColor"],
  data() {
    return {
      form: {
        user_id: this.$route.params.id,
        course_id: "",
        status: "",
      },
      results: [
        {
          key: 0,
          value: "Pending",
        },
        {
          key: 1,
          value: "Failed",
        },
        {
          key: 2,
          value: "Passed",
        },
      ],
    };
  },
  watch: {
    data(v) {
      this.form = v;
    },
    user(v){
      this.form.course_id = v.course[0].id
      this.form.status = v.course[0].result.status
    }
  },
  computed: {
    ...mapGetters("courses", ["allcourses"]),
    ...mapGetters("users",["user"])
  },
  components: {
    TextInput,
    SelectInput,
  },
  created() {
    this.getAllCourses();
    switch (this.$route.name) {
      case 'UpdateUserResults':
          this.getUser(this.$route.params.id)
        break;
    
      default:
        break;
    }
  },
  methods: {
    ...mapActions("courses", ["getAllCourses"]),
    ...mapActions("users",['getUser']),
    checkForm() {
      this.$emit("submit", this.form);
    },
  },
};
</script>

<style></style>
