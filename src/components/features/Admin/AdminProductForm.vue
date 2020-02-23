<template>
  <form @submit.prevent="trySubmit()" class="d-flex flex-column">
    <h4>Ajouter un produit</h4>
    <hr class="w-100">
    <div class="form-group">
      <label for="image">Image</label>
      <input v-model="form.img" class="form-control" type="text" id="image">
    </div>
    <div class="form-group">
      <label for="title">Titre</label>
      <input v-model="form.title" class="form-control" type="text" id="title">
    </div>
    <div class="form-group">
      <label for="desc">Description</label>
      <textarea v-model="form.description" class="form-control" id="desc" rows="4"></textarea>
    </div>
    <div class="form-group">
      <label for="price">Prix</label>
      <input v-model.number="form.price" class="form-control" type="number" id="price">
    </div>
    <ul v-if="errors.length">
      <li class="alert alert-danger" v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <button class="btn btn-primary">Ajouter</button>
    <pre>
      {{ $data }}
    </pre>
  </form>
</template>

<script>
import { eventBus } from '../../../main';

export default {
  data() {
    return {
      form: {
        img: '',
        title: '',
        description: '',
        price: ''
      },
      errors: []
    }
  },
  methods: {
    trySubmit() {
      if (this.formIsValid()) {
        eventBus.addProduct({ ...this.form });
        this.resetForm();
        eventBus.changePage('User');
      }
    },
    resetForm() {
      this.form = {
        img: '',
        title: '',
        description: '',
        price: ''
      };
    },
    formIsValid() {
      if (!this.form.img) {
        this.errors.push('img required');
      }

      if (!this.form.title) {
        this.errors.push('title required');
      }

      if (!this.form.description) {
        this.errors.push('description required');
      }

      if (!this.form.price) {
        this.errors.push('price required');
      }
      return this.errors.length ? false : true;
    }
  }
}
</script>

<style scoped>
  ul {
    padding: 0;
    list-style: none;
  }
</style>