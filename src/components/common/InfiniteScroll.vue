
<template>
    <div ref="trigger" style="height: 1px"></div>
  </template>
  
  <script>
  export default {
    props: {
      callback: {
        type: Function,
        required: true,
      },
      isLoading: {
        type: Boolean,
        default: false,
      },
    },
    mounted() {
  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !this.isLoading) {
      console.log("Triggering callback...");
      this.callback();
    }
  });

  observer.observe(this.$refs.trigger);
},

beforeUnmount() {
  if (this.observer) {
    this.observer.disconnect();
  }
}
  };
  </script>
  