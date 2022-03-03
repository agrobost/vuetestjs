<template>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white q-px-md q-py-xs">
      <span class="text-h6 text-weight-bold kimberley">
        {{ prize.rank }} prix
      </span>
      <span
        class="text-h6 float-right text-weight-light museo-sans-condensed-700"
      >
        {{ 6 - prize.rank }} numéros gagnants
      </span>
    </q-card-section>
    <img
      alt="Triangle gifi"
      src="~assets/gifi-triangle-rect.png"
      class="triangle-rect"
    />
    <div class="flex row no-wrap items-center">
      <img
        :src="prize.imgUrl"
        class="test stylized-background"
        @click="card = true"
      />
      <span class="text-body1 q-mx-auto museo-sans-700">{{ prize.label }}</span>
    </div>
    <q-card-section class="q-pt-none">
      <div class="text-body2">{{ prize.desc }}</div>
    </q-card-section>
  </q-card>

  <q-dialog v-model="card">
    <q-card class="my-card">
      <q-img :src="prize.imgUrlLarge" />
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Prize",
  props: {
    prize: {
      type: Object,
      required: true,
      default: null,
    },
  },
  setup() {
    return {
      card: ref(false),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
.test
  width: 49%
.triangle-rect
  position: absolute
  width: 100%
  height: 18px
.stylized-background
  background-image: url("~assets/prizes-bg-1.png")
  background-position: center
  background-repeat: no-repeat
  background-size: cover
</style>
