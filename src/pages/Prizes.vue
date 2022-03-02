<template>
  <template v-for="user in users" :key="user.id">
    <Prize :user="user" />
  </template>
  prizes=> {{ store.prizes }}
  <img
    v-if="store.loading"
    alt="Vue logo"
    src="../assets/quasar-logo-vertical.svg"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "../stores/main";
import Prize from "../components/Prize.vue";

export default defineComponent({
  name: "Prizes",
  components: { Prize },
  setup() {
    const users = ref([
      {
        firstName: "Frank",
        lastName: "Murphy",
        email: "frank.murphy@test.com",
        role: "User",
      },
      {
        firstName: "Vic",
        lastName: "Reynolds",
        email: "vic.reynolds@test.com",
        role: "Admin",
      },
      {
        firstName: "Gina",
        lastName: "Jabowski",
        email: "gina.jabowski@test.com",
        role: "Admin",
      },
      {
        firstName: "Jessi",
        lastName: "Glaser",
        email: "jessi.glaser@test.com",
        role: "User",
      },
      {
        firstName: "Jay",
        lastName: "Bilzerian",
        email: "jay.bilzerian@test.com",
        role: "User",
      },
    ]);
    const store = useStore();
    const { doubleCount, getPrizes } = store;
    // const unsubscribe = store.$onAction(
    //   ({
    //     name, // name of the action
    //     store, // store instance, same as `someStore`
    //     args, // array of parameters passed to the action
    //     after, // hook after the action returns or resolves
    //     onError, // hook if the action throws or rejects
    //   }) => {
    //     // a shared variable for this specific action call
    //     const startTime = Date.now();
    //     // this will trigger before an action on `store` is executed
    //     console.log(`Start "${name}" with params [${args.join(', ')}].`);

    //     // this will trigger if the action succeeds and after it has fully run.
    //     // it waits for any returned promised
    //     after((result) => {
    //       console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`);
    //     });

    //     // this will trigger if the action throws or returns a promise that rejects
    //     onError((error) => {
    //       console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`);
    //     });
    //   },
    // );

    // manually remove the listener
    // unsubscribe();
    getPrizes();
    return { doubleCount, store, users };
  },
});
</script>
