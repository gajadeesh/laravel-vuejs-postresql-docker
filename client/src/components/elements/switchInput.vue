<template>
  <tr>
    <td width="50%">
      <label :for="forName">{{ label }}</label>
    </td>
    <td width="50%">
      <label class="switch">
        <input
          type="checkbox"
          :id="forName"
          :name="forName"
          v-model="swicthValue"
        />
        <span class="slider round"></span>
      </label>
      <label for="">{{ value }}</label>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["label", "forName", "value"],
  computed: {
    swicthValue: {
      get() {
        switch (this.value) {
          case "active":
            return true;
            break;
          case "inactive":
            return false;
            break;
          default:
            break;
        }
      },
      set(newValue) {
        switch (newValue) {
          case true:
            this.$emit("value", "active");
            break;
          case false:
            this.$emit("value", "inactive");
            break;
          default:
            break;
        }
      },
    },
  },
};
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
