<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No has seleccionado nada</h1>
  </div>
  <FloatingButton />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    FloatingButton: defineAsyncComponent(() =>
      import("../components/FloatingButton.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
