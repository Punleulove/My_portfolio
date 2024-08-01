<script setup lang="ts">
import Html from "../Skill/Html.vue";
import Css from "../Skill/Css.vue";
import Javascript from "../Skill/Javascript.vue";
import Php from "../Skill/Php.vue";
import Vue from "../Skill/Vue.vue";
import Laravel from "../Skill/Laravel.vue";
import Tailwind from "../Skill/Tailwind.vue";
import jquery from "../Skill/Jq.vue";
import Mysql from '../Skill/Mysql.vue'
</script>

<template>
  <div>
    <div class="mt-10 ml:mt-24 ml-1 mr-6 gap-2 grid  lg:ml-[24%] grid-row-2 ">
       <h2 class="mb-4 text-lg tracking-tight font-bold text-gray-900 ml-4 dark:text-white">My Skill</h2>
      <div
        class="grid  items-center  auto-cols-max lg:gap-3 grid-cols-1 ml-6 sm:gris-cols-2 md:grid-cols-2 lg:grid-cols-4"
      >
        <Html />
        <Css />
        <Javascript />
        <Php />
          <Vue />
        <Laravel/>
        <Tailwind/>
        <jquery/>
        <Mysql />
        
      </div>
      
    </div>
  </div>
</template>
