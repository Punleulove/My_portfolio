<script setup>
import { RouterView, RouterLink } from "vue-router";

import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
import Skill from "./views/Skill.vue";
import Home from './views/Home.vue'

</script>
<template>
  <div class="scroll-smooth focus:scroll-auto">
    <Navbar />
  </div>
  <router-view />
</template>
<style scoped></style>
