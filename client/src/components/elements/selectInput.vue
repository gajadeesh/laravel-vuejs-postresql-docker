<template>
  <tr>
    <td width="50%">
      <label :for="forName">{{ label }}</label>
    </td>
    <td width="50%">
      <select :id="forName" :name="forName" v-model="selected">
        <option disabled value="">Please select one</option>
        <option v-for="opt in options" :key="opt.key" :value="itemKey ? opt[itemKey]: opt.key">{{itemValue ? opt[itemValue] : opt.value}}</option>
      </select>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["label", "forName","options","value",'itemValue', 'itemKey'],
  computed:{
    selected:{
      get(){
        return this.value
      },
      set(newValue){
        this.$emit('value', newValue)
      }
    }
  }
};
</script>

<style></style>
