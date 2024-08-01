<template>
  <div>
    
        <h5
          class="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
        >
          Laravel
        </h5>
        <!-- bar -->
        <div>
          <span id="ProgressLabel" class="sr-only">Loading</span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="50"
            class="block rounded-full bg-gray-200"
          >
            <span
              class="block h-6 rounded-full bg-red-500 text-center text-[10px]/6"
              :style="{ width: progressbar +'%' }"
            >
              <span class="font-bold text-white">{{ progress }}% </span>
            </span>
          </span>
        </div>
        <!-- bar -->
      </div>
      <div class="p-6 pt-0">
       
      </div>
   
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      progressbar:0,
    };
  },

  created() {
   let interval = setInterval(() => {
       if (this.progressbar <= 85)
           this.progressbar += 0.1;    
            
       else
        clearInterval(interval);
   }, 1);
    },

    computed: {
        progress(){
            return this.progressbar.toFixed();
        }
    }
};
</script>
<style scoped></style>
