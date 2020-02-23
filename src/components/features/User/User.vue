<template>
  <div>
    <div class="d-flex flex-row">
      <shop class="w-75"></shop>
      <cart class="w-25"></cart>
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

<style>

</style>