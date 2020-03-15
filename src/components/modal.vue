<template>
  <div class="Buton">
    <button class='Buton__btn' @click="showModal = true">Show Modal</button>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
