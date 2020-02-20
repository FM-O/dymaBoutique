import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: '1',
        img: 'https://www.apple.com/v/macbook-pro-16/a/images/overview/keyboard_hero__dlk5v7utj6ky_large.jpg',
        title: 'MacBook',
        description: 'Le nouveau MacBook Pro intègre un sublime écran Retina de 16 pouces – le plus grand écran Retina jamais vu sur un portable Mac. Avec une luminance de 500 nits, cet écran affiche des zones claires spectaculaires et des blancs éclatants, et il garantit des noirs profonds grâce à un photo‑alignement précis des molécules de cristaux liquides. La large gamme de couleurs P3 offre quant à elle des photos et des vidéos d’une qualité et d’un réalisme époustouflants. Où que vous soyez, votre travail apparaîtra sous son meilleur jour.',
        price: 1500
      },
      {
        id: '2',
        img: 'https://www.apple.com/v/macbook-pro-16/a/images/overview/keyboard_hero__dlk5v7utj6ky_large.jpg',
        title: 'MacBook',
        description: 'Le nouveau MacBook Pro intègre un sublime écran Retina de 16 pouces – le plus grand écran Retina jamais vu sur un portable Mac. Avec une luminance de 500 nits, cet écran affiche des zones claires spectaculaires et des blancs éclatants, et il garantit des noirs profonds grâce à un photo‑alignement précis des molécules de cristaux liquides. La large gamme de couleurs P3 offre quant à elle des photos et des vidéos d’une qualité et d’un réalisme époustouflants. Où que vous soyez, votre travail apparaîtra sous son meilleur jour.',
        price: 2700
      },
      {
        id: '3',
        img: 'https://www.apple.com/v/macbook-pro-16/a/images/overview/keyboard_hero__dlk5v7utj6ky_large.jpg',
        title: 'MacBook',
        description: 'Le nouveau MacBook Pro intègre un sublime écran Retina de 16 pouces – le plus grand écran Retina jamais vu sur un portable Mac. Avec une luminance de 500 nits, cet écran affiche des zones claires spectaculaires et des blancs éclatants, et il garantit des noirs profonds grâce à un photo‑alignement précis des molécules de cristaux liquides. La large gamme de couleurs P3 offre quant à elle des photos et des vidéos d’une qualité et d’un réalisme époustouflants. Où que vous soyez, votre travail apparaîtra sous son meilleur jour.',
        price: 3500
      },
      {
        id: '4',
        img: 'https://www.apple.com/v/macbook-pro-16/a/images/overview/keyboard_hero__dlk5v7utj6ky_large.jpg',
        title: 'MacBook',
        description: 'Le nouveau MacBook Pro intègre un sublime écran Retina de 16 pouces – le plus grand écran Retina jamais vu sur un portable Mac. Avec une luminance de 500 nits, cet écran affiche des zones claires spectaculaires et des blancs éclatants, et il garantit des noirs profonds grâce à un photo‑alignement précis des molécules de cristaux liquides. La large gamme de couleurs P3 offre quant à elle des photos et des vidéos d’une qualité et d’un réalisme époustouflants. Où que vous soyez, votre travail apparaîtra sous son meilleur jour.',
        price: 4000
      },
      {
        id: '5',
        img: 'https://www.apple.com/v/macbook-pro-16/a/images/overview/keyboard_hero__dlk5v7utj6ky_large.jpg',
        title: 'MacBook',
        description: 'Le nouveau MacBook Pro intègre un sublime écran Retina de 16 pouces – le plus grand écran Retina jamais vu sur un portable Mac. Avec une luminance de 500 nits, cet écran affiche des zones claires spectaculaires et des blancs éclatants, et il garantit des noirs profonds grâce à un photo‑alignement précis des molécules de cristaux liquides. La large gamme de couleurs P3 offre quant à elle des photos et des vidéos d’une qualité et d’un réalisme époustouflants. Où que vous soyez, votre travail apparaîtra sous son meilleur jour.',
        price: 600
      },
      {
        id: '6',
        img: 'https://www.apple.com/v/macbook-pro-16/a/images/overview/keyboard_hero__dlk5v7utj6ky_large.jpg',
        title: 'MacBook',
        description: 'Le nouveau MacBook Pro intègre un sublime écran Retina de 16 pouces – le plus grand écran Retina jamais vu sur un portable Mac. Avec une luminance de 500 nits, cet écran affiche des zones claires spectaculaires et des blancs éclatants, et il garantit des noirs profonds grâce à un photo‑alignement précis des molécules de cristaux liquides. La large gamme de couleurs P3 offre quant à elle des photos et des vidéos d’une qualité et d’un réalisme époustouflants. Où que vous soyez, votre travail apparaîtra sous son meilleur jour.',
        price: 1000
      }
    ],
    cart: []
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map(c => c.id).includes(product.id)) {
        this.cart = [ ...this.cart, product ];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter(i => i.id !== item.id);
      this.$emit('update:cart', this.cart);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
