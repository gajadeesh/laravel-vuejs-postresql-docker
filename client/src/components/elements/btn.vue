<template>
  <button :class="styleClass" @click="$emit('clicked')">{{label}}</button>
</template>

<script>
export default {
    props:['label','styleClass']
}
</script>