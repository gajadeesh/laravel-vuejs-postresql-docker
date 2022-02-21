<template>
  <header class="header">
    <nav class="navbar">
      <a href="/" class="nav-logo">Emapta</a>
      <ul class="nav-menu">
        <li class="nav-item">
           <a href="/users" class="nav-logo">Users</a>
        </li>
        <li class="nav-item">
          <a href="/courses" class="nav-logo">Courses</a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dropDown: "",
    };
  },
  watch: {
    dropDown(val) {
      this.$bus.$emit("dropDownSelected", val, this.$route.params.id);
    },
  },
};
</script>