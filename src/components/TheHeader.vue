<template>
  <transition appear>  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="Dyma" width="30" height="30">
        Dyma
      </a>
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
      </button>
      <div id="collapse" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/shop">Boutique</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        const nav = document.querySelector(`#${ binding.value }`);

        window.addEventListener('click', () => {
          nav.classList.remove('show');
        });

        
        el.addEventListener('click', (e) => {
          e.stopPropagation();

          if (nav.classList.contains('show')) {
            nav.classList.remove('show');
          } else {
            nav.classList.add('show');
          }
        });
      }
    }
  }
}
</script>

<style scoped>
  @keyframes fromtop {
    from {
      opacity: .3;
      transform: translateY(-20px);
    }
  }

  .v-enter-active {
    animation: fromtop 1s ease;
  }

  .router-link-active {
    font-weight: bold;
  }
</style>