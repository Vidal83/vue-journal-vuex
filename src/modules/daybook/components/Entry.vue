<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fw-light">Julio</span>
      <span class="mx-2 fw-light">2021</span>
    </div>

    <div class="entry-description">
      ipsum dolLoremor sit, amet consectetur adipisicing elit. Quas, incidunt.
      Asperiores laudantium velit corrupti iure tempora quasi dolorum laboriosam
      optio nobis a eligendi, ex soluta cumque vero dolor dolores aspernatur?
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
