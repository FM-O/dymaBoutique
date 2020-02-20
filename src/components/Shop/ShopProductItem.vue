<template>
  <div class="w-25 p-3 product-container">
    <div class="d-flex flex-row justify-content-center">
      <img :src="product.img" alt="">
    </div>
    <div>
      <h3>{{ product.title }}</h3>
    </div>
    <hr class="w-100">
    <div>
      <p>
        {{ product.description }}
      </p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button @click="addProductToCart()" class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: ['product'],
  methods: {
    addProductToCart () {
      eventBus.addProductToCart({ ...this.product });
    }
  }
}
</script>

<style>
  .product-container {
    /* height: 400px; */
  }
  
  img {
    max-width: 100%;
  }

  p {
    font-size: 12px;
  }
</style>