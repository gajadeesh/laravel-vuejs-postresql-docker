<template>
  <tr>
    <td width="50%">
      <label :for="forName">{{ label }}</label>
    </td>
    <td width="50%">
      <input
        :type="type"
        class="text-input"
        :id="forName"
        :name="forName"
        v-model="textValue"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["label", "forName", "type", "value"],
  computed: {
    textValue: {
      get() {
        if (this.value) {
          return this.value;
        } else {
          return "";
        }
      },
      set(newValue) {
        this.$emit("typedValue", newValue);
      },
    },
  },
};
</script>

<style></style>
