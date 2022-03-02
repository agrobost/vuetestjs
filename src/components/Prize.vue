<template>
  <div>
    plop
    {{ user.firstName }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Prize",
  props: {
    user: {
      type: Object,
      required: true,
      default: null,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
