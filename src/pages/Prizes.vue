<template>
  <template v-if="!store.loading">
    <q-page
      padding
      class="q-pa-lg column content-center items-start q-gutter-md"
    >
      <template v-for="prize in store.prizes.prizes" :key="prize.prize_id">
        <Prize :prize="prize" />
      </template>

      <!-- place QPageScroller at end of page -->
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page>
  </template>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "../stores/main";
import Prize from "../components/Prize.vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "Prizes",
  components: { Prize },
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const { getPrizes } = store;
    const unsubscribe = store.$onAction(
      ({
        name, // name of the action
        store, // store instance, same as `someStore`
        args, // array of parameters passed to the action
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
      }) => {
        // a shared variable for this specific action call
        const startTime = Date.now();
        // this will trigger before an action on `store` is executed
        console.log(`Start "${name}" with params [${args.join(", ")}].`);

        // this will trigger if the action succeeds and after it has fully run.
        // it waits for any returned promised
        after((result) => {
          if (name === "getPrizes") {
            $q.loading.hide();
          }
          console.log(
            `Finished "${name}" after ${
              Date.now() - startTime
            }ms.\nResult: ${result}.`
          );
        });

        // this will trigger if the action throws or returns a promise that rejects
        onError((error) => {
          console.warn(
            `Failed "${name}" after ${
              Date.now() - startTime
            }ms.\nError: ${error}.`
          );
        });
      }
    );

    // manually remove the listener
    // unsubscribe();
    getPrizes();
    $q.loading.show();
    return { store };
  },
});
</script>
