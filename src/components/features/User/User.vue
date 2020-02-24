<template>
  <div>
    <div class="d-flex flex-row">
      <transition appear name="left">
        <shop class="w-75"></shop>
      </transition>
      <transition appear name="right">
        <cart class="w-25"></cart>
      </transition>
    </div>
  </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

export default {
  components: {
    Shop,
    Cart
  }
}
</script>

<style scoped>
  @keyframes fromleft {
    from {
      opacity: .3;
      transform: translateX(-20px);
    }
  }

  @keyframes fromright {
    from {
      opacity: .3;
      transform: translateX(20px);
    }
  }

  .left-enter-active {
    animation: fromleft 1s ease;
  }

  .right-enter-active {
    animation: fromright 1s ease;
  }
</style>