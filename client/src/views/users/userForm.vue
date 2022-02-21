<template>
  <div class="center card">
    <h2>{{ title }}</h2>
    <form id="app" @submit.prevent="checkForm" method="post">
      <table width="100%">
        <tbody>
            <text-input
              label="Name"
              forName="name"
              type="text"
              @typedValue="form.name = $event"
              :value="form.name"
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
        name: ""
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
