

<template>
 <div>
    <div
    class="flex pt-24 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden"
  >
    <div class="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
      <div class="w-full md:w-1/2 lg:pr-32">
        <div
          class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium"
        >
          <h2 class="space-y-3">Welcome to my portfolio,</h2>
          <h2>
            I am
            <span class="typed-text">{{ typeValue }}</span>
            <span class="blinking-cursor">|</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h2>
        </div>

        <h3
          class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed"
        >
          I am a student from Kandel province who studied in Royal university of
          Phnom Penh and ETEC Center . I am taking information technology
          engineering major. I finished my grade 12in 2021. I used to work in a
          part-time Job in a place for more then a year.
        </h3>
        <div
          class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start"
        >
          <a
            download="My_CV.pdf"
            href="/files/My_CV.pdf"
            class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <i
              data-feather="arrow-down-circle"
              class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
            ></i>
            <span class="text-sm sm:text-lg font-general-medium duration-100"
              >Download CV</span
            ></a
          >
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center md:justify-end">
        <img data-aos="fade-left" src="../assets/image/hero.jpg" alt="Myprofile" />
      </div>
    </div>
  </div>
 </div>
 
 
</template>
<script>
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
       displayTextArray: ["PHP Developer", "Designer", "API Developer"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>
<style scoped>

</style>
