<template>
  <div class="center card">
    <h2>{{ title }}</h2>
    <form id="app" @submit.prevent="checkForm" method="post">
      <table width="100%">
        <tbody>
            <text-input
              label="Title"
              forName="title"
              type="text"
              @typedValue="form.title = $event"
              :value="form.title"
            />
        </tbody>
      </table>

      <p>
        <input type="submit" value="Submit" class="btn btn-info"/>
      </p>
    </form>
  </div>
</template>

<script>
import TextInput from "../../components/elements/textInput.vue";
export default {
  props: ["title", "data"],
  data() {
    return {
      form: {
        title: ""
      },
    };
  },
  watch: {
    data(v) {
      this.form = v;
    },
  },
  components: {
    TextInput
  },
  methods: {
    checkForm() {
      this.$emit("submit", this.form);
    },
  },
};
</script>

<style></style>
