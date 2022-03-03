<template>
  <q-layout view="lHh LpR lFr">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="arrow_back" @click="goBack" />
        <q-toolbar-title> {{ $t("screen.prizes.title") }} </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="main-bg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  setup() {
    return {
      goBack() {
        console.log("back");
      },
    };
  },
};
</script>

<style lang="sass" scoped></style>
