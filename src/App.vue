<template>
  <div id="app">
    <navbar></navbar>
      <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
<style>
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
}

</style>
